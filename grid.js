const Grid_Size = 21

export function randomGridPosition() {  //food generation on grid
    return{
        x: Math.floor(Math.random() * Grid_Size) + 1,  //1 to 21
        y: Math.floor(Math.random() * Grid_Size) + 1
    }
} 

export function outsideGrid (position) {  //snake's head position outta the grid
    return ( position.x < 1 || position.x > Grid_Size || position.y < 1 || position.y > Grid_Size)
}
