// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
document.getElementById('decreaseBtn').onclick = function () {
  count -= 1;
  document.getElementById('value').innerHTML = count;
};
document.getElementById('resetBtn').onclick = function () {
  count = 0;
  document.getElementById('value').innerHTML = count;
};
document.getElementById('increaseBtn').onclick = function () {
  count += 1;
  document.getElementById('value').innerHTML = count;
};

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {});
});
