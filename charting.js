
var Performers = ['Fuller', 'Suyama', 'Peacock', 'aniket'];

console.log("Hey");



var barchart = {
labels: Performers,
datasets: [{

		label: 'none',
		borderWidth: 1,
		data: [3,2,3,4]
	}]
};


var piechart = {
labels: Performers,
datasets: [{

		label: 'none',
		borderWidth: 1,
		data: [3,2,3,4]
	}]
};

var radarchart = {
labels: Performers,
datasets: [{

		label: 'none',
		borderWidth: 1,
		data: [3,2,3,4]
	}]
};


window.onload = function(){


			console.log("Hey");

			var ctx1 = document.getElementById('barChart_graph').getContext('2d');
			window.myBar = new Chart(ctx1, {
				type: 'bar',
				data: barchart,
				options: {
					responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'GDP OF SEVERAL STATES'
					}
				}
			});


			var ctx2 = document.getElementById('pieChart_graph').getContext('2d');
			window.myBar = new Chart(ctx2, {
				type: 'pie',
				data: piechart,
				options: {
					responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'GDP OF SEVERAL STATES'
					}
				}
			});


			var ctx3 = document.getElementById('radarChart_graph').getContext('2d');
			window.myBar = new Chart(ctx3, {
				type: 'radar',
				data: radarchart,
				options: {
					responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'GDP OF SEVERAL STATES'
					}
				}
			});




};






