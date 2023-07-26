import './List.css';
import recipesLink from "./ListArray";
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import Search from '../Search/Search';



const List = ({ item }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const buttonId = null;
	const closeModal = () => {
		setModalOpen(false)
	}
	return (
		<div className="ListWrapper">
			<ul className="List_container">
				{
					recipesLink.map(item => (
						<li key={item.ident} className='dishItem'>
							<img key={item.ident} className='dishImage' src={item.img} alt={`${item.name} photo`} />
							<h3 className='dishName'>{item.name}</h3>
							<ul className='dishingredients'>
								{
									item.ingredients.map((subItem, index) => (
										<li key={item.index}>
											{subItem}
										</li>
									))
								}
							</ul>
							<Button onClick={() => setModalOpen(true)} buttonId={item.id} primary={true.toString()}>Show detailss</Button>
							<Modal isOpen={modalOpen} onClose={closeModal}>
								<Search />

							</Modal>
						</li>
					))
				}

			</ul>

		</div >

	)
}

export default List;

