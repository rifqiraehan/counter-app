const VALUE_KEY = 'counter-value';
const HISTORY_KEY = 'counter-history';

export function getCount() {
  return parseInt(localStorage.getItem(VALUE_KEY)) || 0;
}

export function getHistory() {
  const history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  return history;
}

export function setCount(value) {
  localStorage.setItem(VALUE_KEY, value);
  updateHistory(value);
}

function updateHistory(value) {
  let history = getHistory();
  history.push(value);
  if (history.length > 100) {
    history = history.slice(-100);
  }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export function increment() {
  const current = getCount();
  setCount(current + 1);
}

export function decrement() {
  const current = getCount();
  setCount(current - 1);
}

export function reset() {
  setCount(0);
  localStorage.setItem(HISTORY_KEY, JSON.stringify([0]));
}
