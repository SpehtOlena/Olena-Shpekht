import './List.css';
import RecipesArray from '../../Recipes/CategoryCard/RecipesArray';
import Button from '../../UI/Button/Button';
import { useState } from 'react';
import Modal from '../../UI/Modal/Modal';

const List = () => {
	const [activeRecipe, setActiveRecipe] = useState('')
	const filteredRecipe = RecipesArray.filter((item => item.id === activeRecipe))
	const [modalOpen, setModalOpen] = useState(false);
	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<div className="ListWrapper">
			<ul className="List_container">
				{
					RecipesArray.map(item => (
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
							<Button primary={true.toString()} onClick={() => { setActiveRecipe(item.id); setModalOpen(true) }}>Show details</Button>

						</li>
					))
				}

			</ul>
			<Modal isOpen={modalOpen} onClose={closeModal}>
				{
					filteredRecipe.map(item => (
						<div className={'dish-container'} key={item.id1}>
							<div className={'dish-info'}>
								<img className='dishImage-modal' src={item.img} alt={`${item.name} photo`} />
								<h3 className='dishName-modal'>{item.name}</h3>
								<div className='dish-prev'>
									{item.description}
								</div>
							</div>
							<div className={'dish-content'}>
								<ul>
									{
										item.allIngredients.map((subItem) => (
											<li key={item.index} className='IngrItems-modal'>
												{subItem}<input type='checkbox' className={'checkbox-modal'} />
											</li>
										))
									}
								</ul>
								<div className='description-modal'>
									{
										item.cooking.map((value) => (
											<li key={value} className={'description-items'}>
												{value}
											</li>
										))
									}
								</div>
								<div className="closeButton">
									<Button onClick={closeModal} search={true.toString()}>Back</Button>
								</div>
							</div>
						</div>
					))
				}
			</Modal>

		</div >

	)
}

export default List;