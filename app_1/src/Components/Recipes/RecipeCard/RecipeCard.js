import Button from "../../UI/Button/Button"


const RecipeCard = ({ item }) => {
	const { img, name, category, ingredients } = item
	return (

		<li key={item} className='dishItem'>
			<img className='dishImage' src={img} alt={`${name} photo`} />
			<h3 className='dishName'>{name}</h3>
			<h4 style={{ textAlign: 'center' }}>{category}</h4>
			<ul className='dishingredients'>
				{
					ingredients.map((value, index) => (
						<li key={index}>
							{value}
						</li>
					))
				}
			</ul>
			<Button primary={true.toString()}>Show detailss</Button>

		</li>

	)
}
export default RecipeCard