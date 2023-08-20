import React from "react";
import { useState } from "react";
import CategoryCard from "../../Recipes/CategoryCard/CategoryCard.js";
import Banner from "../../UI/Banner/Banner.js";
import Typography from "../../UI/Typography/Typography";
import Button from "../../UI/Button/Button.js";
import './Page1.css';
import List from "../List/List.js";
import RecipesArray from "../../Recipes/CategoryCard/RecipesArray.js";

export const recipes = [
	{
		category: "Супи",
		description: "Смачні і ситні страви на основі бульйону або закваски.",
		imgUrl: "https://picsum.photos/id/117/300/200"
	},
	{
		category: "Основні страви",
		description: "Апетитна італійська кухня з різноманітними видами макаронних виробів.",
		imgUrl: "https://picsum.photos/id/17/300/200"
	},
	{
		category: "Салати",
		description: "Легкі та освіжаючі страви зі свіжих овочів та соусів.",
		imgUrl: "https://picsum.photos/id/187/300/200"
	},
	{
		category: "Десерти",
		description: "Солодкі випічка, морозиво та інші солодощі для задоволення вашого післядегустаційного смаку.",
		imgUrl: "https://picsum.photos/id/167/300/200"
	}
];

export const Page1 = () => {
	const [filterData, setFilterData] = useState('')
	const filteredData = RecipesArray.filter((value => value.category === filterData))
	console.log(filteredData.length);
	return (
		<div className="App_content">
			{
				filteredData.length == 0 ? <div>
					<Banner />
					<div className="category">
						<div className="category_container">
							<Typography type={'title'}>Recipes</Typography>
							<div className="category_items">
								{
									recipes.map(value => (
										<div className="category_item">
											<CategoryCard item={value} key={value.name} />
											<Button onClick={() => { setFilterData(value.category); }} className="category-button"> {value.category}</Button>
										</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
					:
					<ul className={'user_container'}>
						{
							filteredData.map(value => (
								<List value={value} key={value.id} />
							))
						}
					</ul>
			}

		</div >

	)
}
