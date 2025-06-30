import { getCount, increment, decrement, reset } from './counter.js';

const countSpan = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

function updateUI() {
  countSpan.textContent = getCount();
}

incrementBtn.addEventListener('click', () => {
  increment();
  updateUI();
});

decrementBtn.addEventListener('click', () => {
  decrement();
  updateUI();
});

resetBtn.addEventListener('click', () => {
  reset();
  updateUI();
});

updateUI();
