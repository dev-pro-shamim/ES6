var billGates = {shirt:true, shirtColor:"red",smile:true, sweater:true, sweterColor:"black"}

//console.log(billGates['shirtColor']);//normal object declaration

var billGatesPro = {
    shirt:{
        color:"red",
        Quality:"Good",
        price:"2500 USD"
    },
    Sweter:{
        color:"Black",
        Quality:"Good",
        price:"200 USD",
        warm:"Best"

    },
    face:{
        similing:"Yes",
        glass:"yes",
        teath:"BigWhite"
    }
}

//Nested Object Declaration

console.log(billGatesPro['Sweter']['Quality']);
