
// Get the context of the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
var myChart = new Chart(ctx, {
  type: 'bar',  
  data: {
    labels: ['2008', '2009', '2010', '2011', '2012', '2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023'],  // X-axis labels
    datasets: [{
      label: 'Iphone Users Worldwide ',
      data: [10, 25, 60, 115, 206, 329,442,569,710,814,888,948,1042,1231,1334,1382],  // Y-axis data points
      borderColor: 'rgba(75, 192, 192, 100)',
      backgroundColor: ['#8baf91', '#fffff'],
      borderWidth: 1,
      fill: true  // Set to true if you want a filled line chart
    }]
  },
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



function changeContent() {
  document.getElementById("canvas-c").innerHTML = '<canvas id="myChart" width="400" height="400" style="width: 400px; height: 400px;"></canvas>';
}
