import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Value from './components/Value';
import Graphics from './components/Graphics';

function App() {
	return (
		<div className="wrapper">
			<Sidebar />
			<div id="content">
				<Navbar />
				<div className="main">
					<Value />
					<Graphics />
				</div>
			</div>
		</div>
	);
}

export default App;
