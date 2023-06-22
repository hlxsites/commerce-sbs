const xml2js = require('xml2js');
const XLSX = require('xlsx');
const fs = require('fs');

const url = 'https://www.maidenform.com/sitemap.xml';
const endpoint = 'https://franklin.maidenform.com/graphql';
const store = 'maidenform_store_view';

const query = `query getProducts($currentPage: Int=1){
    products(
        search: ""
        pageSize: 20
        currentPage: $currentPage
    ) {
        items {
            sku
            url_key
        }
        page_info {
            current_page
            page_size
            total_pages
        }
        total_count
    }
}`.replaceAll(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ');


const headers = {
    'Content-Type': 'application/json',
    store,
};

(async () => {
    // Fetch sitemap
    const response = await fetch(url, {
        headers: {
            'user-agent': 'Chrome',
        }
    }).then(response => response.text());

    // Parse sitemap XML
    const parsedXml = await xml2js.parseStringPromise(response);

    // Get all URLs
    let urls = parsedXml.urlset.url.map(url => url.loc);

    // Skip URLs with no .html
    urls = urls.filter(url => String(url).endsWith('.html'));

    // Strip hostname
    urls = urls.map(url => String(url).replace('https://www.maidenform.com', ''));

    // Prepare XLSX content
    const data = [
        ['Source', 'Destination'],
    ];

    // Get all products
    let allProducts = [];
    let count = 0;
    let totalCount;
    let currentPage = 1;
    do {
      const api = new URL(endpoint);
      api.searchParams.append('query', query);
      api.searchParams.append('variables', JSON.stringify({ currentPage }));
  
      const response = await fetch(api, {
        method: 'GET',
        headers,
      });
      const result = await response.json()
  
      const { page_size: pageSize } = result.data.products.page_info;
      count = currentPage * pageSize;
      totalCount = result.data.products.total_count;
      currentPage += 1;
      allProducts = [...allProducts, ...result.data.products.items]
    } while (count < totalCount);

    // Go through all URLs
    for(let url of urls) {
        // Use new PDP format if URL points to product
        const matchingProduct = allProducts.find(({ sku, url_key }) => 
            url.indexOf(`${url_key}.html`) > -1);

        if (matchingProduct) {
            const { sku, url_key } = matchingProduct;
            data.push([url, `/products/${url_key}/${sku}`])
            continue;
        }
        
        // Otherwise just add a redirect without .html
        const urlWithoutHTML = url.replace('.html', '');
        data.push([url, urlWithoutHTML]);
    }

    // Write XLSX file
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = { Sheets: { 'Sheet1': worksheet }, SheetNames: ['Sheet1'] };
    const xlsx = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    await fs.promises.writeFile('redirects.xlsx', xlsx);
})();