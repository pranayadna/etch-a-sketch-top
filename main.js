let grids = [];

const container = document.querySelector('.container');

const createGrid = (n) => {
    if (n > 100) {
        return alert('Max input is 100');
    } 

    console.log(grids);
    if(grids.length > 0){
        grids.forEach(grid => {
            container.removeChild(grid)
        })
        grids = [];
    }
    
    for (let i = 0; i < n ** 2; i++) {
        const gridDiv = document.createElement('div');
        container.appendChild(gridDiv);
        grids.push(gridDiv);   
    }

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