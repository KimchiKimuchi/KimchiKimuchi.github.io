let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pig.jpg') {
      myImage.setAttribute('src','images/pig2.jfif');
    } else {
      myImage.setAttribute('src','images/pig.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
  let myName = prompt('お名前は？.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'こんにちは、 ' + myName + 'さん';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'こんにちは、 ' + storedName + 'さん';
}

myButton.onclick = function() {
  setUserName();
}