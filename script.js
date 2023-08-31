console.log('Hello World');

const mughlaiFood=['Tandoori','Korma','Biriyani'];

let student={
    'Name':'Erica Ghosh',
    'Class':'X',
    'Roll':'93',
};

function sayHello(name){
    console.log('Hello, '+name);
}

function math(a,b){
    console.log('Numbers are:'+a+','+b);
    let sum = a+b;
    let divide=a/b;
    let multiply=a*b;
    let substract=a-b;

    console.log('Addition:'+sum);
    console.log('Substraction:'+substract);
    console.log('Multiplication:'+multiply);
    console.log('Division:'+divide);

}
sayHello('Aheli Ghosh');
sayHello('Anish Ganguly');
math(9,2);
math(4,8);
math(5,6);
console.log(mughlaiFood);
console.log(student);