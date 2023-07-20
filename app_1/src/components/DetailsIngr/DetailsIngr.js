import './DetailsIngr.css';

const IngredArray = ['1 3-4 lb corned beef brisket', '1 large onion, roughly chopped', '3 carrots, chopped', '3 ribs celery, chopped', '1 can tomato paste', '12 oz dark beer (stout or porter work well here)']

const DetailsIngr = () => {

	return (
		<div>
			{
				<ul>{IngredArray.map(ingr => <li className='IngrItems' key={ingr}>{ingr}<input type='checkbox' /></li>)}</ul>
			}
		</div>
	)
}
export default DetailsIngr;
