function  setup() {
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}
window.addEventListener('DOMContenLoaded', setup, false);

window.addEventListener('beforeinput', function (event){
    var message = 'You have changes thas have not been saved';
    (event || window.event).returnValue = message;
});