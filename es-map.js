// var MyMap = new Map();
// MyMap.set("key1","Bangladesh")
// MyMap.set("key2","India")
// MyMap.set("key3","maldiv")
// MyMap.set("key4","Bhutan")
// MyMap.set("key5","Nepal")
// MyMap.set("key6","Thailand")

//console.log(MyMap.values());
//console.log(MyMap.keys());

//for of loop


//************************ */

// for(let myvalue of MyMap.values()){
//     console.log(myvalue);
// }

// for(let myKey of MyMap.keys()){
//     console.log(myKey);
// }

//************ */

var MyMap = new Map();
MyMap.set("key1","Bangladesh")
MyMap.set("key2","India")
MyMap.set("key3","maldiv")
MyMap.set("key4","Bhutan")
MyMap.set("key5","Nepal")
MyMap.set("key6","Thailand")

//MyMap.delete("key1")
//MyMap.delete("key2")

//MyMap.clear()

// console.log(MyMap.get("key6"));


// for(let myvalue of MyMap.values()){
//     console.log(myvalue);
// }

if(MyMap.has("key1")){
    console.log("Yes");
}else{
    console.log("No");
}