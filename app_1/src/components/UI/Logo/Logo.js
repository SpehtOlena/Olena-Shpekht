import LogoPhoto from "./rocket.png";
import styleLogo from './logo.module.css';

const Logo = () => {
	return (
		<div className={styleLogo.container}>
			<img src={LogoPhoto} alt="LogoPhoto" />
			<p className={styleLogo.label}>to<span>do</span></p>
		</div>
	)
}
export default Logo