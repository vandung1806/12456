var ulUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function  checkUsername(minlength) {
    if(elUsername.value.length < minlength) {
        elMsg.innerHTML = 'Username must be' + minlength + ' characters or more'
    } else {
        elMsg.innerHTML = '';
    }
}

if (elUsername.addEventListener) {
    elUsername.addEventListener('blur',function (){
        checkUsername(5);
    }, false);
} else {
    elUsername.attachEvent('onblur', function (){
        checkUsername(5);
    });
}