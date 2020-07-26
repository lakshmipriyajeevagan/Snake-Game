import { getInputDirection } from "./input.js"

export const Snake_Speed = 5 //snake moves 5 times per sec
const snakeBody = [{x: 11, y: 11}]  // array: snake at centre initially
let newSegments = 0

export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >= 0; i--){  //i starts from second last element
        snakeBody[i + 1] = {...snakeBody[i]} //last elem = current elem (obj)
    }  

    //move the head
    snakeBody[0].x += inputDirection.x  
    snakeBody[0].y += inputDirection.y
}
 
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)   //append snakeElement to div
    })
}


//increase snake length
export function expandSnake(amount) {
    newSegments += amount
}

//if head hits tail
export function onSnake(position, {ignoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

//to check death 
//returns snake's head position (hit wall)
export function getSnakeHead() {
    return snakeBody[0]
}
//returns snake's head (hit tail)
export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true})
}


function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] }) 
    }
    newSegments = 0  //remove previous segments
}
