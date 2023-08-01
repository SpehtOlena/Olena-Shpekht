import './Search.css';
import recipesLink from '../List/ListArray';
import Typography from '../Typography/Typography';

const Search = () => {
	const recipeModal = recipesLink.filter(recipe =>
		recipe.id === 4);
	return (
		<div className="Search">
			<div className="search_container">
				{
					recipeModal.map(item => (
						<li key={item.id1} className='dishItem'>
							<img key={item.img1} className='dishImage' src={item.img} alt={`${item.name} photo`} />
							<h3 className='dishName'>{item.name}</h3>
							<div className='dishName'>
								<Typography type={'text'}>
									{item.description}
								</Typography>

							</div>
							<ul>
								{
									item.allIngredients.map((subItem, index) => (
										<li key={item.index} className='IngrItems'>
											{subItem}<input type='checkbox' />
										</li>
									))
								}
							</ul>
							<div className='Description'>
								<Typography type={'text'}>
									{item.cooking}
								</Typography>

							</div>

						</li>
					))
				}
			</div>
		</div>
	)
}


{/* <DetailsCard />
				<div className="searchContent">
					<DetailsIngr />
					<Description />

				</div> */}

export default Search 
