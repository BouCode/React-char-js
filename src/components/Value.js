import React from 'react';

const Value = () => {
	return (
		<div className="value">
			<div className="card border-info mb-3" style={{ maxWidth: '18rem' }}>
				<div className="card-body text-info">
					<h5 className="card-title">TEMPERATURA 1</h5>
					<p className="card-text">30°C</p>
				</div>
			</div>
			<div className="card border-info mb-3" style={{ maxWidth: '18rem' }}>
				<div className="card-body text-info">
					<h5 className="card-title">HUMEDAD 1</h5>
					<p className="card-text">80%</p>
				</div>
			</div>
			<div className="card border-info mb-3" style={{ maxWidth: '18rem' }}>
				<div className="card-body text-info">
					<h5 className="card-title">TEMPERATURA 2</h5>
					<p className="card-text">28°C</p>
				</div>
			</div>
			<div className="card border-info mb-3" style={{ maxWidth: '18rem' }}>
				<div className="card-body text-info">
					<h5 className="card-title">HUMEDAD 2</h5>
					<p className="card-text">75%</p>
				</div>
			</div>
		</div>
	);
};

export default Value;
