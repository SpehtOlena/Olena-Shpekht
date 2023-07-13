import './App.css';
import { damage } from './game';
import { FIRE, WATER, ELECTRIC, GRASS } from './game/efficiencies';

function App() {
	return (
		<div className="App">
			{
				damage(WATER, FIRE, 5, 5)
			}
		</div>
	);
}

export default App;
