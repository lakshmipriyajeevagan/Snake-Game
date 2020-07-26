import { update as updateSnake, draw as drawSnake, Snake_Speed , getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0; 
let gameOver = false
const gameBoard = document.getElementById('game-board')  //body of HTML
 
function main(currentTime) {
    if (gameOver) {
       return alert (' Whoops! ')
    }

    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000  //milli secs to secs
    if (secondsSinceLastRender < 1 / Snake_Speed) return  //if timesincelastrender < half sec, snake doesn't move

    //tells when to render the window frame
    lastRenderTime = currentTime //new last render time

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath(gameBoard)
}
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
