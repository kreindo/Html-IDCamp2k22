let a:number = 1
let b:string = 'hello'
let c = 2

while (a !== 10) {
    a++
    console.log('hello ' + a)
}


async function hello() {
    return 'world'
}


type Style = 'bold' | 'italic';

let font: Style;


interface Cars {
    name: string,
    type: string,
    [key: string]: any

}


let myCar: Cars = {
    name: 'BMW',
    type: 'V8',
    age: 12,
    id: 239918,
    isDmg: true,
}


let pow = (a: number, b:number):string => {
    return Math.pow(a, b).toString();
}

pow(21, 23)