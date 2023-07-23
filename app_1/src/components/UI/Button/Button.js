import styleButton from './Button.module.css';
import PlusIcon from '../PlusIcon/PlusIcon';

const Button = ({ children }) => {
	return (
		<button className={styleButton.Button}>
			{children}<PlusIcon />
		</button>
	)
}
export default Button