const STORAGE_KEY = 'counter-value';

export function getCount() {
  return parseInt(localStorage.getItem(STORAGE_KEY)) || 0;
}

export function setCount(value) {
  localStorage.setItem(STORAGE_KEY, value);
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
}
