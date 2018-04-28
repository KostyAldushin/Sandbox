class HumanNew {
    constructor (name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
    static staticMethod() {
        console.log('static method');
    }
}
let people2 = new HumanNew('Jack2');
people2.showName();
HumanNew.staticMethod();
class Man extends HumanNew{
    constructor (age,name) {
        // noinspection JSAnnotator
        super(name);
        this.age = age;
    }
    showAge(){
        console.log(this.age)
        super.showName();
    }
}

let Man2 = new Man("age","nick");
Man2.showAge();

