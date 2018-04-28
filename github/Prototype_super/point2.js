function PointOld (x,y) {
    this.x = x;
    this.y = y;
}

PointOld.prototype.showResult = function () {
    return `${this.x}, ${this.y}`;
};

let pixel2 = new PointOld(40,50);
console.log(pixel2.showResult());



function Human (name) {
    this.name = name;
}
Human.prototype.showName = function () {
    console.log(this.name);
};

let people1 = new Human('Jack');
people1.showName();


