const INVERT_PROBABILITY = 0.5;

// Track if mouse is being pressed
let isMouseDown = false;

// Add pointer down/up listeners to document
document.addEventListener('pointerdown', () => {
  isMouseDown = true;
});

document.addEventListener('pointerup', () => {
  isMouseDown = false;
});

document.addEventListener('pointercancel', () => {
  isMouseDown = false;
});

function initGrid() {
  const startButton = document.getElementById('start');
  const grid = document.getElementById('grid');

  // Guard against missing elements
  if (!startButton || !grid) {
    return;
  }

  // Clear any existing grid first
  grid.innerHTML = '';

  // Create 100 cells (10x10)
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';

    // Click toggles the cell
    cell.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      cell.classList.toggle('black');
      isMouseDown = true;
    });

    // Dragging paints cells while pointer is down
    cell.addEventListener('pointerenter', () => {
      if (isMouseDown) {
        cell.classList.add('black');
      }
    });

    grid.appendChild(cell);
  }

  // Hide the start button after grid is created
  startButton.style.display = 'none';
}

// Ensure the script runs after the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGrid);
} else {
  initGrid();
}
