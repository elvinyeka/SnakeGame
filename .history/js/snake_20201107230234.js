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
    var posX = Math.round(Math.random() * (10 - 1) + 1);
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

console.log(coordinates);
console.log(snakeBody);

