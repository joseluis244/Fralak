var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Pendiante", "Concretado", "Atencion","no planificada"],
        datasets: [{
            label: '# of Votes',
            data: [11, 3, 1,2],
            backgroundColor: [
                '#8eacbb',
                '#4b830d',
                '#f9a825',
                '#80e27e'
            ],
            borderWidth: 0
        }]
    }
});