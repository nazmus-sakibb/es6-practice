class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'VNC School and College';
    }
}

const Student1 = new Student(23, 'Mahi');
const Student2 = new Student(78, 'Fabiha');
console.log(Student1.name, Student2.name);