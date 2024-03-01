
var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    var output = document.getElementById("output").innerHTML=text;
    Read(text);

}
function Read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text =='hello'){
        speech.text = "hello, how are you";

    }
    else if(text == "what is your name"){
        speech.text = "my name is alex,  I am your assistant";
    }

    else if(text == "what is your girlfriend name"){
        speech.text = "my girl friend name  alexa";
    }
    else if(text == "what is your favourite player name"){
        speech.text = "my favourite player name Shakib Al Hasan, he is alrounder and Messi";
    }
    else if(text == "how old are you"){
        speech.text = "i am 2years old";
    }

    else if(text == "do you eat rice"){
        speech.text = "No I don't eat rice";
    }

    else if(text == "who made you"){
        speech.text = "Web developer Shamim made me";
    }


    else if(text == "Who is Shamim"){
        speech.text = "He is a Web Developer";
    }

    else if(text == "what is your mother name"){
        speech.text = "i don't know but im waiting";
    }

     
    else if(text == "what is your father name"){
        speech.text = "my father name is shamim ";
    }

    else if(text == "what is your brother name"){
        speech.text = "my brother name is tamim ";
    }
    else if(text == "what is your sister name"){
        speech.text = "my sister name is afra ";
    }

    else if(text == "say something about developer"){
        speech.text = "he is a web developer name shamim, and he want to learn more about software, right now he work at home";
    }
    else if(text == "Tumi Ki rate ghumao"){
        speech.text = " no, never ";
    }
    else if(text == "where are you from"){
        speech.text = "i don't know";
    }
    else if(text == "thank you"){
        speech.text = "you are most welcome brother";
    }














    else{
        speech.text = "Please Try Again";
    }

    document.getElementById("res").innerHTML = speech.text;

    // document.getElementById("gf").innerHTML = speech.text;


    window.speechSynthesis.speak(speech);

}