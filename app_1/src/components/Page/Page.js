import Button from "../UI/Button/Button";
import stylePage from './Page.module.css';
import Input from "../UI/Input/Input";
import Checkbox from "../UI/Checkbox/Checkbox";

const Page = () => {
	return (
		<div className={stylePage.mainContainer}>
			<div className={stylePage.inputContainer}>
				<Input />
				<Button children={'Add'} />
			</div>
			<div className="">
				<Checkbox />
			</div>
		</div>
	)
}
export default Page
