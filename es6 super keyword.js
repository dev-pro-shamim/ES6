class Parent{
    hello1() {
       console.log("Hello One Function");
      
   }
   hello2() {
       console.log("Hello Two Function");
  
   }
}

class Child extends Parent{

demo(){
    super.hello1();
    super.hello2();

}
   
}
var obj = new Child();
obj.demo();


