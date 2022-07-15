let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pig.jpg') {
      alert('ぶひっ')  
      myImage.setAttribute('src','images/pig.jpg');
    }
}
let myButton = document.querySelector('button');
myButton.onclick = function() {
  alert('ありがとうございます！')
}
