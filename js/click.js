var msg = '<div class=\"header\"><a id=\"close" href="#">close x</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 3 a.m.';
msg += 'During this time, there may be minor disruptions to service.</div>';

var elNote = document.createElement('div');
elNote.setAttribute('id','note');
elNote.innerHTML = msg;
document.body.removeChild(elNote);

function  diswissNote() {
    document.body.removoChid(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click',diswissNote,false);