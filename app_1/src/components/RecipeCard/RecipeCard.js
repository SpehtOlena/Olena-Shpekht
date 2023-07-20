import './RecipeCard.css'



const RecipeCard = ({ item }) => {
	const { name, description, imgUrl } = item
	return (
		<div className='recipeItem'>
			<img className='recipeImage' src={imgUrl} alt={`${name} photo`} />
			<h3 className='recipeName'>{name}</h3>
			<p className='recipeDescription'>
				{description}
			</p>
		</div>
	)
}
export default RecipeCard;