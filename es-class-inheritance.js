class Parent{
     hello1() {
        console.log("Hello One Function");
       
    }
    hello2() {
        console.log("Hello Two Function");
   
    }
}

class Child extends Parent{

    hello1() {
        console.log("Hello One Function  Hello One Function Hello One Function");
       
    }//Method OverRidding for child Class


    
}
var obj = new Child();
obj.hello1();
obj.hello2();

// var obj = new Parent();
// obj.hello1();
// obj.hello2();




