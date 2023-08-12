import styleCheck from './checkbox.module.css';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { BsCheckCircleFill } from 'react-icons/bs';

const Checkbox = ({ onClick, complete }) => {
	return (
		<div className={styleCheck.checkbox} onClick={onClick}>
			{
				complete ?
					<RiCheckboxBlankCircleLine size={22} className={styleCheck.icon} /> :
					<BsCheckCircleFill size={22} className={styleCheck.completeIcon} />
			}
		</div>
	);
};
export default Checkbox