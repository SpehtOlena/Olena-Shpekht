import Button from "../../UI/Button/Button"


const DetailsCard = ({ item, setModalOpen }) => {
	const closeModal = () => {
		setModalOpen(false)
	}
	const { img, name, description } = item
	return (
		<div className={'dish-container'} key={item.id1}>
			<div className={'dish-info'}>
				<img className='dishImage-modal' src={img} alt={`${name} photo`} />
				<h3 className='dishName-modal'>{name}</h3>
				<div className='dish-prev'>
					{description}
				</div>
			</div>
			<div className={'dish-content'}>
				<ul>
					{
						item.allIngredients.map((subItem) => (
							<li key={item.id2} className='IngrItems-modal'>
								{subItem}<input type='checkbox' className={'checkbox-modal'} />
							</li>
						))
					}
				</ul>
				<div className='description-modal'>
					{
						item.cooking.map((value) => (
							<li key={value.description} className={'description-items'}>
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
	)
}
export default DetailsCard