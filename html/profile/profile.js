var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Pendiante", "Concretado", "no planificada"],
        datasets: [{
            label: '# of Votes',
            data: [11, 4, 2],
            backgroundColor: [
                '#8eacbb',
                '#4b830d',
                '#80e27e'
            ],
            borderWidth: 0
        }]
    }
});