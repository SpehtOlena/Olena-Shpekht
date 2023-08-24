import React from 'react';
import { useState } from 'react';
import RecipesArray from './RecipesArray';
import './Cards.css'


const CategoryCard = ({ item }) => {
	const [filterData, setFilterData] = useState(null)
	const { category, description, imgUrl } = item
	return (
		<div className='categoryItem'>
			<img className='categoryImage' src={imgUrl} alt={`${category} photo`} />
			<h3 className='categoryName'>{category}</h3>
			<p className='categoryDescription'>
				{description}
			</p>


		</div>
	)
}
export default CategoryCard



