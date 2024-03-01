
//perameter pass/***************** */

// class MyClass{
//     constructor(a,b){
//         console.log(a+b);
//     }
// }
// new MyClass(10,20);

//variable
class MyClass{
    constructor(a,b){
        this.firstNum = a
        this.secNum = b
    }
      add() {
       let result =  this.firstNum + this.secNum;
       console.log(result);
        
    }
}
var obj = new MyClass(10,20);

obj.add();