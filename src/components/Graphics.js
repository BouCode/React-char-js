import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

const Graphics = () => {
	const ctx = useRef(null);

	useEffect(() => {
		if (ctx.current) {
			const myChart = new Chart(ctx.current, {
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
		}
	});

	return (
		<div className="graphics">
			<div className="temperature">
				<canvas ref={ctx} />
			</div>
			{/* <div className="humedad">
				<canvas id="myChart2" />
			</div> */}
		</div>
	);
};

export default Graphics;
