class Parent{
    constructor(){
        this.fathersName = 'Bappy kumar';
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + ' ' + this.fathersName;
    }
}

const baby = new Child('Mahiya Mahi');
const baby2 = new Child('Johny');
console.log(baby.getFullName());
console.log(baby2);