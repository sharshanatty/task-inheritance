import { throws } from 'assert';

interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    constructor(person: IPersonData) {
        this._name = person.name;
        this._secondName = person.secondName;
        this._age = person.age;
    }

    getData(): IPersonData {
        const person: IPersonData = {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
        return person;
    }
}

export class Student extends Person {
    readonly _phone: string;

    constructor(student: IStudentData) {
        super(student);
        this._phone = student.phone;
    }

    getData(): IStudentData {
        const student: IStudentData = {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
            phone: this._phone,
        };
        return student;
    }
}
