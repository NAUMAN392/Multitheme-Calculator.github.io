el = document.querySelector("#bg");
function red(){
  el.bgColor = '#FF5454';
  window.navigator.vibrate(70);
}
function green(){
  el.bgColor = '#9DFFB3';
  window.navigator.vibrate(70);
}
function purple(){
  el.bgColor = '#C15CFF';
  window.navigator.vibrate(70);
}
function blue(){
  el.bgColor = '#3378FF';
  window.navigator.vibrate(70);
}
function salman(val) {
  document.getElementById("result").value = val;
  window.navigator.vibrate(70);
}
function nauman(val) {
  document.getElementById("result").value += val;
  window.navigator.vibrate(70);
}
function ans(val) {
  try {
    salman(eval(document.getElementById("result").value));
  window.navigator.vibrate(100);  
}
catch(e) {
  salman('syntax error');
  window.navigator.vibrate(100);
}
}
function sq(val) {
  salman(Math.sqrt(document.getElementById('result').value));
  window.navigator.vibrate(100);
  }