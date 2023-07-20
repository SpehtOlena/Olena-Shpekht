import detailsPhoto from '../../img/roast-beef.png'
import './DetailsCard.css'

const DetailsCard = () => {
	return (
		<div className='detailsItem' >
			<img className='detailsImg' src={detailsPhoto} alt="detailsPhoto" />
			<div className="detailsContent">
				<h3 className='detailsTitle' >Recipe name</h3>
				<h4 className='detailsSubtitle' >Categore : main</h4>
				<h4 className="detailsSubtitle">Time fome done : 1h 20 min</h4>
				<p className="detailsDescription">Description : A very big problem I see with most restaurants is that they describe their menu items with a lifeless list of ingredients</p>
			</div>

		</div>
	)
}
export default DetailsCard