import { useState } from "react"
import Checkbox from "../UI/Checkbox/Checkbox"
import Button from "../UI/Button/Button";
import styleTask from './task.module.css'

const Task = ({ task, removeTask, handleComplete }) => {
	const [complete, setComplete] = useState(true);
	const handleComplete = () => {
		setComplete(!complete)
		const check = (task.complete) = complete;
		handleComplete(check);
	}
	return (
		<div key={Task.id} className="styleTask.task">
			<Checkbox onClick={handleComplete} complete={ } />
			<p className={complete ? style.text : style.text.complete}>{task.text}</p>
			<Button type={'delete'} onClick={() => removeTask(task)} />
		</div>
	)
}
export default Task