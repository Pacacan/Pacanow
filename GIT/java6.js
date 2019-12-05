class Rectangle {                                         
    constructor ( width, height) {                           
        this.width = width; //20                             
        this.height = height; //30
    }
    calcField() {
        return this.width * this.height;
    }
}

var rect = new Rectangle(20, 30);
console.log(rect.calcField());

//metoda prototypowa (tego jeszcze nie było)
rect.prototype.obwod =
function() {
    return this.width * 2 + this.height * 2;
};


var arr = new Array [47, 11, 4, 256, 11, 84, 498, 21, 9, 1, 7952, 455, 46, 956, 213]