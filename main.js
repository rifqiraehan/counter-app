import { getCount, increment, decrement, reset, getHistory } from './counter.js';

const countSpan = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const chartCanvas = document.getElementById('counterChart');

let chartInstance = null;

function updateUI() {
  const current = getCount();
  countSpan.textContent = current;
  updateChart();
}

function updateChart() {
  const history = getHistory();
  const labels = history.map((_, i) => `#${i + 1}`);
  const data = {
    labels,
    datasets: [{
      label: 'Riwayat Counter',
      data: history,
      fill: false,
      borderColor: 'blue',
      tension: 0.0
    }]
  };

  if (chartInstance) {
    chartInstance.data = data;
    chartInstance.options.animation = {
      duration: 500,
      easing: 'easeOutQuart'
    };
    chartInstance.update();
  } else {
    chartInstance = new Chart(chartCanvas, {
      type: 'line',
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500,
          easing: 'easeOutQuart'
        },
        plugins: {
          legend: { display: true }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
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
