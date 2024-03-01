let age = 18;
console.log(age)

function sum(){
    let num1 = 12;
    let num2 = 12;
    const total = num1+ num2;
    return total;
}
console.log(sum());

for (i = 0; i<10; i++){
    console.log("inside loop " + i);

}

console.log("outside loop " + i);



const obj = {name:"Eshan"};
// obj = {age:20}//reasgin
obj.name = 'shamim';
console.log(obj.name);