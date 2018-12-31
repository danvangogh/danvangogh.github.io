window.onload = function() {

var ctx = document.getElementById("RFEChart");
var RFEChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Project Coordination", "Strategic Planning", "Design", "Training/Onboarding", "Riding Bikes"],
        datasets: [{
            label: '# of Votes',
            data: [18, 12, 5, 8, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        layout: {
          padding: {
            left: 10,
            right: 20,
            top: 0,
            bottom: 0
          }
        },
        legend: {
          position: 'left',
          labels: {
            boxWidth: 1,
            fontColor: '#666',
            fontSize: 12,
            padding: 2,
          }
        }
    }
});


var ctz = document.getElementById("JTChart");
var JTChart = new Chart(ctz, {
    type: 'horizontalBar',
    data: {
        labels: ["Branding/Design", "Strategic Planning", "Content Creation", "Drinking Tea"],
        datasets: [{
            label: '# of Votes',
            data: [10, 12, 10, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero:true,
            display: false,
          }
        }]
      },
        layout: {
          padding: {
            left: 0,
            right: 30,
            top: 0,
            bottom: 50
          }
        },
        legend: {
          position: 'none',
        }
    }
});
}
