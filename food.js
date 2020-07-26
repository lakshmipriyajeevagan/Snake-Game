import { onSnake, expandSnake } from './snake.js'
import {randomGridPosition} from './grid.js'

let food = getRandomFoodPosition()  //everything's bw 1 and 21
const Expansion_Rate = 1  //snake'll expand 1

export function update() {
    //check if snake's on food
    if (onSnake(food)) {
        expandSnake(Expansion_Rate)
        food = getRandomFoodPosition()  //update food position
    }
}
 
export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    //generate new food if location is free or snake ate it
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
} 
