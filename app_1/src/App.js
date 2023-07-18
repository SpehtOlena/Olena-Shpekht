import React, { useState } from "react";
import Page1 from "./components/Page1/Page1";
import List from "./components/List/List";
import './App.css';
import Menu from "./components/menu/menu";
import Search from "./components/Search/Search";



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
	const [activePage, setActivePage] = useState(Page1);
	return (
		<div className="App">
			<Menu setActivePage={setActivePage} items={menuItems} />
			{activePage}
		</div>
	);
};

export default App;
