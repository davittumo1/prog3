let matrix = []
function generate(a, gr, grEat, mox, amk) {
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < a; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * a)
        let y = Math.floor(Math.random() * a)
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * a)
        let y = Math.floor(Math.random() * a)
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2
        }
    }
    for (let i = 0; i < mox; i++) {
        let x = Math.floor(Math.random() * a)
        let y = Math.floor(Math.random() * a)
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3
        }
    }
    for (let i = 0; i < amk; i++) {
        let x = Math.floor(Math.random() * a)
        let y = Math.floor(Math.random() * a)
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4
        }
    }
}
generate(80, 50, 30, 25, 20)
console.log(matrix);

var side = 10;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var amenakerArr = [];



function objectsCreate() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            } else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y)
                gishatichArr.push(gsh)
            } else if (matrix[y][x] == 4) {
                var amk = new Amenaker(x, y)
                amenakerArr.push(amk)

            }
        }
    }
}

objectsCreate()
function setup() {


    noStroke()
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
            }
            else if (matrix[y][x] == 4) {
                fill("pink");
            }
            ellipse(x * side, y * side, side, side)
        }
    }
    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        // gishatichArr[i].move()
        // gishatichArr[i].mult()
        // gishatichArr[i].die()
    }
    for (var i in amenakerArr) {
        // amenakerArr[i].eat()
        amenakerArr[i].move()
        // amenakerArr[i].mult()
    }
}
