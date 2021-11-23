var sx = document.getElementById('sx');
var sx = document.getElementById('sy');
var sx = document.getElementById('px');
var sx = document.getElementById('py');
var sx = document.getElementById('cx');
var sx = document.getElementById('cy');

function  showPosition(event) {
    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientY;
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false);