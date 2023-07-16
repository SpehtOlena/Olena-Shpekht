import './banner.css';
import bannerPhoto from '../../img/banner_img.png';
import Button from '../button/button';
import Typography from '../typography/typography';

const Banner = () => {
	return (
		<div className='banner'>
			<div className="banner_container">
				<div className="banner_content">
					<Typography type={'title'}>Yummy Recipes</Typography>
					<Typography type={'text'}>we have a lot of yummy recipes from all
						aruond the world.</Typography>
					<Button>See Recipes</Button>
				</div>
				<div className="banner_image">
					<img src={bannerPhoto} alt="humburger_image" />
				</div>
			</div>

		</div>
	)
}
export default Banner