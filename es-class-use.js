class MyClass{
     MyFun() {
        console.log("I am From Function inside Class")
        
    }

    MyOne() {
        console.log("I am From Function inside Class")
        
    }

    MyTwo(name) {
        console.log(name)
        
    }
}

var obj = new MyClass;
obj.MyFun();
obj.MyOne();
obj.MyTwo("I am Shamim From Dinajpur");
