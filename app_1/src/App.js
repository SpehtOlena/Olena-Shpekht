import { useState } from 'react';
import './App.css';
import AddUsers from './components/AddUsers/AddUsers';
import Body from './components/Body/Body';

const App = () => {
	const [activeUser, setActiveUser] = useState(null)
	return (
		<div className="App">
			{!!activeUser ? <Body activeUser={activeUser} setActiveUser={setActiveUser} /> : <AddUsers activeUser={activeUser} setActiveUser={setActiveUser} />}

		</div >
	);
}

export default App;
