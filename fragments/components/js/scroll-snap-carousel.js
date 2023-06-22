// overflow scroll-snap container with arrows
const previousButtons = document.querySelectorAll('.scroll-snap-carousel .prev');
const nextButtons = document.querySelectorAll('.scroll-snap-carousel .next');
const containers = document.querySelectorAll('.scroll-snap-carousel .scroll-content');

previousButtons.forEach((previousButton, index) => {
  const container = containers[index];

  previousButton.addEventListener('click', () => {
    // Get the current scroll position and the width of the container
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.offsetWidth;

    // Find the previous scroll position based on the current position and container width
    const previousPosition = Math.max(0, scrollPosition - containerWidth);

    // Scroll to the previous position with a smooth animation
    container.scrollTo({
      left: previousPosition,
      behavior: 'smooth',
    });
  });
});

nextButtons.forEach((nextButton, index) => {
  const container = containers[index];

  nextButton.addEventListener('click', () => {
    // Get the current scroll position and the width of the container
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.offsetWidth;

    // Find the next scroll position based on the current position and container width
    const nextPosition = Math.min(
      container.scrollWidth - containerWidth,
      scrollPosition + containerWidth,
    );

    // Scroll to the next position with a smooth animation
    container.scrollTo({
      left: nextPosition,
      behavior: 'smooth',
    });
  });
});
