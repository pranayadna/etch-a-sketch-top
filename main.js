// 16x16 grid of square divs

const grids = [];

const container = document.querySelector('.container');

// Create multiple element
for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.setAttribute('class', 'grid');
    container.appendChild(gridDiv);
    
    grids.push(gridDiv);
    
}

console.log(grids);

const grid = document.querySelector('.grid');
grids.forEach(grid => {
    
    grid.style.width = '16px';
    grid.style.height = '16px';
    grid.style.border = '1px solid black';
})
// for (let i = 0; i < 5; i++) {
// }
