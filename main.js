












let speech = new SpeechSynthesisUtterance();
/*
let voices =[];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()
 => {
   voices = window.speechSynthesis.getVoices();
   speech.voice = voice[0];
   
   voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)))
 };*/

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.SpeechSynthesis.speak(speech);
  
});









/*
button = document.querySelector("button");
text = document.querySelector("textarea");

button.addEventListener("click",() => {
 let utterance = new SpeechSynthesisUtterance(text.value);
 speechSynthesis.speak(utterance);
  
});*/