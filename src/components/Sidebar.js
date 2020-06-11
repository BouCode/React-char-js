import React from 'react';
import Logo from '../assets/static/logo.svg';

const Sidebar = () => {
	return (
		<div id="sidebar">
			<div className="sidebar-header">
				<img src={Logo} alt="" style={{ width: '70%', marginLeft: '20px' }} />
			</div>

			<ul className="list-unstyled components">
				<p>IoT Solutions</p>
				<li>
					<a href="#">Dashboard</a>
				</li>
				<li>
					<a href="#">Sensor</a>
				</li>
				<li>
					<a href="#">Graphics</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
