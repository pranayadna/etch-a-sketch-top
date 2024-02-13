const grids = [];

const container = document.querySelector('.container');

// Create n x n grid
const createGrid = (n) => {
    if (n > 100) {
        return alert('Max input is 100');
    }

    for (let i = 0; i < n ** 2; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.setAttribute('class', 'grid');
        container.appendChild(gridDiv);
        
        grids.push(gridDiv);
        
    }
    
    const grid = document.querySelector('.grid');
    grids.forEach(grid => {
        grid.style.width = 400 / n + 'px';
        grid.style.height = 400 / n + 'px';
        grid.style.border = '1px solid black';
    
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = '#000'
        })
        
        grid.addEventListener('mouseout', () => {
            grid.style.backgroundColor = ''
        })
    })
}

createGrid(100)



