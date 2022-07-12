// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDiary(arr) {
    for (var item of arr) {
        console.log(item);
    }
}
logDiary(dairy);
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(obj) {
    console.log(Object.entries(obj));
}
birdCan(bird);

// Task 3
function animalCan(obj1, obj2) {
    console.log(Object.entries(obj1));
    console.log(Object.entries(obj2));
}
animalCan(animal, bird);
