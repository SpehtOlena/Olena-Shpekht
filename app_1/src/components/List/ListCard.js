import './List.css';
import Button from '../Button/Button';
import recipesLink from './ListArray';


const ListCard = ({ item }) => {
	const { name, ingredients, img } = item
	return (
		<div className='dishItem'>
			<img className='dishImage' src={img} alt={`${name} photo`} />
			<h3 className='dishName'>{name}</h3>
			<div className='dishingredients'>
				<a href='#'>{ingredients[0]}</a>
				<a href='#'>{ingredients[1]}</a>
				<a href='#'>{ingredients[2]}</a>
			</div>
			<Button primary={true}>Show detailss</Button>
		</div >
	)
}


export default ListCard;