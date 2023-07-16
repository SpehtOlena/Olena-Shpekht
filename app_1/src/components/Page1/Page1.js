import Banner from "../banner/banner";
import RecipeCard from "../RecipeCard/RecipeCard";
import Typography from "../typography/typography";
import './Page1.css'

const recipes = [
	{
		name: "Супи",
		description: "Смачні і ситні страви на основі бульйону або закваски.",
		imgUrl: "https://robohash.org/soups.jpg"
	},
	{
		name: "Паста",
		description: "Апетитна італійська кухня з різноманітними видами макаронних виробів.",
		imgUrl: "https://robohash.org/pasta.jpg"
	},
	{
		name: "Салати",
		description: "Легкі та освіжаючі страви зі свіжих овочів та соусів.",
		imgUrl: "https://robohash.org/salads.jpg"
	},
	{
		name: "Десерти",
		description: "Солодкі випічка, морозиво та інші солодощі для задоволення вашого післядегустаційного смаку.",
		imgUrl: "https://robohash.org/desserts.jpg"
	}
];

const Page1 = () => {
	return (
		<div className="App_content">
			<Banner />
			<div className="recipes">
				<div className="recipes_container">
					<Typography type={'title'}>Recipes</Typography>
					<div className="recipe_items">
						{
							recipes.map(value => <RecipeCard item={value}></RecipeCard>)
						}
					</div>
				</div>
			</div>
		</div>

	)
}
export default Page1