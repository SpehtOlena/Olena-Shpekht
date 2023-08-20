import React, { useState } from "react";
import './App.css';
import { Page1 } from "./Components/Pages/Page1/Page1";
import List from './Components/Pages/List/List';
import Searche from './Components/Pages/Searche/Searche';
import Menu from "./Components/UI/Menu/Menu";


const menuItems = [
	{
		label: 'Page1',
		element: <Page1 />
	},
	{

		label: 'List',
		element: <List />
	},
	{

		label: 'Searche',
		element: <Searche />
	}
]

const App = () => {
	const [activePage, setActivePage] = useState(<Page1 />);
	return (
		<div className="App">
			<Menu setActivePage={setActivePage} items={menuItems} />
			{activePage}
		</div>
	);
};

export default App;