var i = 0;
var txt = 'Junior Full Stack Developer.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewrite").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function topstop() {
  document.getElementById('indexbody').classList.toggle('indexbody-after');
}

function movetop() {
  document.getElementById('indexbody').classList.remove('indexbody'); 
  document.getElementById('indexbody').classList.add('indexbody-active'); 
}

function showwork() {
  document.getElementById('workblock').hidden = false;
}

function hidework() {
  document.getElementById('workblock').hidden = true;
}


function showabout() {
  document.getElementById('aboutSection').hidden = false;
}

function hideabout() {
  document.getElementById('aboutSection').hidden = true;
}

function showcontact() {
  document.getElementById('contactpage').hidden = false;
}

function hidecontact() {
  document.getElementById('contactpage').hidden = true;
}
  
function showlinks() {
  document.getElementById('workbutton').removeAttribute('hidden');
  document.getElementById('aboutbutton').removeAttribute('hidden');
  document.getElementById('contactbutton').removeAttribute('hidden');
}

function returnwork() {
  document.getElementById('workblock').classList.remove('block');
  document.getElementById('workblock').classList.add('block-after');
  // setTimeout(hidework, 1500);
}

function returnabout() {
  document.getElementById('aboutSection').classList.remove('aboutSection');
  document.getElementById('aboutSection').classList.add('aboutSection-after');
  // setTimeout(hideabout, 1500);
}

function returncontact() {
  document.getElementById('contactpage').classList.remove('contactlinks');
  document.getElementById('contactpage').classList.add('contactlinks-after');
  // setTimeout(hidecontact, 1500);
}

window.onload = typeWriter();setTimeout(movetop,1500);setTimeout(showlinks,3000);
