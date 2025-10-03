const ctx = document.getElementById('aidsChart').getContext('2d');

const aidsChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['South Africa', 'India', 'Nigeria', 'Mozambique', 'USA', 'Russia'],
    datasets: [{
      label: 'People Living with HIV (Millions)',
      data: [7.5, 2.4, 1.9, 2.1, 1.2, 1.0],
      backgroundColor: [
        '#c62828',
        '#ad1457',
        '#6a1b9a',
        '#283593',
        '#0277bd',
        '#2e7d32'
      ],
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: 'Estimated People Living with HIV by Country (2024)',
        font: {
          size: 18
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Millions'
        }
      }
    }
  }
});


const ctxIndia = document.getElementById('indiaHivChart').getContext('2d');

const indiaHivChart = new Chart(ctxIndia, {
  type: 'bar',
  data: {
    labels: ['Maharashtra', 'Andhra Pradesh', 'Karnataka', 'Tamil Nadu', 'Telangana', 'West Bengal', 'Uttar Pradesh'],
    datasets: [{
      label: 'People Living with HIV (in Thousands)',
      data: [330, 270, 240, 190, 180, 160, 140],
      backgroundColor: [
        '#ef5350',
        '#ab47bc',
        '#42a5f5',
        '#26a69a',
        '#ffca28',
        '#8d6e63',
        '#78909c'
      ],
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: true,
        text: 'HIV in India by State (Estimates)',
        font: {
          size: 18
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'People (Thousands)'
        }
      }
    }
  }
});



// 


const ctxPie = document.getElementById('indiaHivPieChart').getContext('2d');

const indiaHivPieChart = new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: [
      'Maharashtra',
      'Andhra Pradesh',
      'Karnataka',
      'Tamil Nadu',
      'Telangana',
      'West Bengal',
      'Uttar Pradesh'
    ],
    datasets: [{
      label: 'HIV Cases (%)',
      data: [330, 270, 240, 190, 180, 160, 140],
      backgroundColor: [
        '#ef5350',
        '#ab47bc',
        '#42a5f5',
        '#26a69a',
        '#ffca28',
        '#8d6e63',
        '#78909c'
      ],
      hoverOffset: 10
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Distribution of HIV Cases by State in India',
        font: {
          size: 18
        }
      },
      legend: {
        position: 'right'
      }
    }
  }
});



