import React, { useState } from "react";
import './App.css';
import { Page1 } from "./Components/Pages/Page1/Page1";
import List from './Components/Pages/List/List';
import Search from './Components/Pages/Search/Search';
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

		label: 'Search',
		element: <Search />
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