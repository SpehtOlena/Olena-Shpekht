import './List.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Search from '../Search/Search';


const ListCard = ({ item }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const closeModal = () => {
		setModalOpen(false)
	}
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
			<Button onClick={() => setModalOpen(true)} primary={true}>Show detailss</Button>
			<Modal isOpen={modalOpen} onClose={closeModal}>
				<Search />

			</Modal>
		</div >
	)
}


export default ListCard;