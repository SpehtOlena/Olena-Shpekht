import styleButton from './button.module.css';
import PlusIcon from '../PlusIcon/PlusIcon';
import { HiOutlineTrash } from 'react-icons/hi';



const Button = ({ children, type, onClick }) => {
	switch (type) {
		case "delete": {
			return (
				<HiOutlineTrash size={20} onClick={onClick} className={styleButton.delete} />
			)
		}
		default: {
			return (
				<button className={styleButton.Button} onClick={onClick}>
					{children}<PlusIcon />
				</button>
			);
		}
	};
}


export default Button