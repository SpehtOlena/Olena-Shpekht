import Button from "../UI/Button/Button";
import stylePage from './page.module.css';
import Input from "../UI/Input/Input";
import Checkbox from "../UI/Checkbox/Checkbox";
import { useState } from "react";

const Page = () => {
	const [inputValue, setInputValue] = useState();
	const handleChange = () => {
		setInputValue(e.target.value)
	}
	return (
		<div className={stylePage.main_container}>
			<div className={stylePage.input_container}>
				<Input type={'text'} placeholder={'Введіть нове завдання......'} value={inputValue} onChange={handleChange} />
				<Button>Добавити</Button>
			</div>
			<div className={stylePage.task_container}>
				<div className={stylePage.label}>
					<p></p>
				</div>
			</div>
		</div>
	)
}
export default Page
