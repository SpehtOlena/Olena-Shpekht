import { useState } from 'react';
import './App.css';
import AddUsers from './components/AddUsers/AddUsers';

function App() {
	const [activeUser, setActiveUser] = useState(null)
	return (
		<div className="App">
			{!!activeUser ? <div>
				{activeUser.name}
			</div> : <AddUsers />}

		</div >
	);
}

export default App;
