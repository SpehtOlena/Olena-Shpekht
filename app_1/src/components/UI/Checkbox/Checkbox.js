import styleCheck from './checkbox.module.css';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { RiCheckboxCircleFill } from 'react-icons/ri';

const Checkbox = ({ onClick, complete }) => {
	return (
		<div className={styleCheck.checkbox} onClick={onClick}>
			{
				complete ?
					<RiCheckboxBlankCircleLine size={22} className={styleCheck.icon} /> :
					<RiCheckboxCircleFill size={22} className={styleCheck.completeIcon} />
			}
		</div>
	);
};
export default Checkbox