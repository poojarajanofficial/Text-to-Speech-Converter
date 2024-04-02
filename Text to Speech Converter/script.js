let speech=new SpeechSynthesisUtterance();   // "SpeechSynthesisUtterance" represents a speech request //

let voices=[];  

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=() => {       // This event is triggered when the list of available voices changes // 

    voices = window.speechSynthesis.getVoices();    //  getVoices() fun is used to retrieve a list of available voices for speech synthesis //

    speech.voice = voices[0];        // index 0, by default it'll speak from the 1st voice //

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name, i)));  //'i' parameter, index of the current voice in the array // 
};

voiceSelect.addEventListener("change",()=>{     
    speech.voice= voices[voiceSelect.value];
});




document.querySelector("button").addEventListener("click", ()=>{
 speech.text=document.querySelector("textarea").value;

 window.speechSynthesis.speak(speech);     // it allows you to speak the contents of a 'SpeechSynthesisUtterance' //

});
