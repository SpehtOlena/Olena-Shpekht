import detailsPhoto from '../../img/roast-beef.png'
import './DetailsCard.css'

const DetailsCard = ({ item }) => {
	const { name, ingredients, img, description } = item
	return (
		<div className="container">
			<div className='detailsItem' >
				<img className='detailsImg' src={img} alt="detailsPhoto" />
				<div className="detailsContent">
					<h3 className='detailsTitle' >{name}</h3>
					<h4 className='detailsSubtitle' >{ingredients}</h4>
					<h4 className="detailsDescription">{description}</h4>
				</div>
			</div>
		</div>
	)
}
export default DetailsCard