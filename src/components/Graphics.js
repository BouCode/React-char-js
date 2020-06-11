import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

const Graphics = () => {
	const chart1 = useRef(null);
	const chart2 = useRef(null);
	useEffect(() => {
		if (chart1.current && chart2.current) {
			const myChart1 = new Chart(chart1.current, {
				// The type of chart we want to create
				type: 'bar',

				// The data for our dataset
				data: {
					labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
					datasets: [
						{
							label: 'My First dataset',
							backgroundColor: 'rgb(255, 99, 132)',
							borderColor: 'rgb(255, 99, 132)',
							data: [ 0, 10, 5, 2, 20, 30, 45 ]
						}
					]
				},
				// Configuration options go here
				options: {}
			});

			const myChart2 = new Chart(chart2.current, {
				// The type of chart we want to create
				type: 'line',

				// The data for our dataset
				data: {
					labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
					datasets: [
						{
							label: 'My First dataset',
							backgroundColor: 'rgb(255, 99, 132)',
							borderColor: 'rgb(255, 99, 132)',
							data: [ 0, 10, 5, 2, 20, 30, 45 ]
						}
					]
				},
				// Configuration options go here
				options: {}
			});
		}
	});

	return (
		<div className="graphics">
			<div className="temperature">
				<canvas ref={chart1} />
			</div>
			<div className="humedad">
				<canvas ref={chart2} />
			</div>
		</div>
	);
};

export default Graphics;
