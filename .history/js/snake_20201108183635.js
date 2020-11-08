var ground = document.createElement('div');
document.body.appendChild(ground);
ground.classList.add('ground');


for(var i=0; i < 101; i++) {
    var box = document.createElement('div');
    ground.appendChild(box);
    box.classList.add('box');

}

var box = document.getElementsByClassName('box');
var x = 1,
    y = 10;

for(var i=0; i< box.length; i++) {
    if(x>10) {
        x = 1;
        y--;
    }
    box[i].setAttribute('posX', x);
    box[i].setAttribute('posY', y);
    x++;
}


function generateSnake() {
    var posX = Math.round(Math.random() * (10 - 3) + 3);
    var posY = Math.round(Math.random() * (10 - 1) + 1);
    return [posX, posY];
}

var coordinates = generateSnake();
var snakeBody  = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'),
document.querySelector('[posX = "' + (coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'),
document.querySelector('[posX = "' + (coordinates[0] - 2) + '"][posY = "' + coordinates[1] + '"]')];

for(var i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody');
}

snakeBody[0].classList.add('snakeHead');

var food;

function createFood() {
    function generateFood() {
        var posX = Math.round(Math.random() * (10 - 3) + 3);
        var posY = Math.round(Math.random() * (10 - 1) + 1);
        return [posX, posY];
    }

    var foodCoordinates = generateFood();
    food = document.querySelector('[posX = "' + foodCoordinates[0] + '"][posY = "' + foodCoordinates[1] + '"]');
    
    while(food.classList.contains('snakeBody')) {
        var foodCoordinates = generateFood();
        food = document.querySelector('[posX = "' + foodCoordinates[0] + '"][posY = "' + foodCoordinates[1] + '"]');
    }
    food.classList.add('food');
}

createFood();

var direction = 'right';


function move() {
    var snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
    snakeBody[0].classList.remove('snakeHead');
    snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
    snakeBody.pop();

    if (direction == 'right') {
        if (snakeCoordinates[0] < 10) {
            snakeBody.unshift(document.querySelector('[posX = "' + ( + snakeCoordinates[0] + 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
        }else {
            snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
        }
    } else if (direction == 'left') {
        if (snakeCoordinates[0] > 1) {
            snakeBody.unshift(document.querySelector('[posX = "' + ( + snakeCoordinates[0] - 1) + '"][posY = "' + snakeCoordinates[1] + '"]'));
        }else {
            snakeBody.unshift(document.querySelector('[posY = "' + snakeCoordinates[1] + '"]'));
        }
    }
    
    

    snakeBody[0].classList.add('snakeHead');
    for(var i = 0; i < snakeBody.length; i++) {
        snakeBody[i].classList.add('snakeBody');
    }
}

var interval  = setInterval(move, 300);


window.addEventListener('keydown', function (e) {
    if (e.keyCode == 37 && direction != 'right') {
        direction = 'left';
        console.log(true);
    }
    else if (e.keyCode == 38 && direction != 'down') {
        direction = 'up';
        console.log(true);
    }
    else if (e.keyCode == 39 && direction != 'left') {
        direction = 'right';
        console.log(true);
        
    }
    else if (e.keyCode == 40 && direction != 'up') {
        direction = 'down';
        console.log(true);
    }
});

