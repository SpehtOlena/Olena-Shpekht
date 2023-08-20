import RecipesArray from "../CategoryCard/RecipesArray";
import Button from "../../UI/Button/Button";


const RecipeCard = (item) => {
	return (
		<div className="RecipeCard-item">
			<li key={item.ident} className='dishItem'>
				<img key={item.ident} className='dishImage' src={item.img} alt={`${item.name} photo`} />
				<h3 className='dishName'>{item.name}</h3>
				<h4>{item.category}</h4>
				<ul className='dishingredients'>
					{
						item.ingredients.map((subItem, index) => (
							<li key={item.index}>
								{subItem}
							</li>
						))
					}
				</ul>
				<Button primary={true.toString()}>Show detailss</Button>

			</li>

		</div>
	)
}
export default RecipeCard