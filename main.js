import { getCount, increment, reset } from './counter.js';

const countSpan = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');

function updateUI() {
  countSpan.textContent = getCount();
}

incrementBtn.addEventListener('click', () => {
  increment();
  updateUI();
});

resetBtn.addEventListener('click', () => {
  reset();
  updateUI();
});

updateUI();
