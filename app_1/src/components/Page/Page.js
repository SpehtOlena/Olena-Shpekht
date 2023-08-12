import Button from "../UI/Button/Button";
import stylePage from './page.module.css';
import Input from "../UI/Input/Input";
import Checkbox from "../UI/Checkbox/Checkbox";
import { useState } from "react";
import Empty from "../Empty/Empty";
import Task from "../Task/Task";


const Page = (e) => {
	const [inputValue, setInputValue] = useState();
	const [todos, setTodos] = useState([]);
	const handleChange = (e) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim()) {
			setTodos([...todos, { id: Date.now(), text: inputValue, complete: false }])
			setInputValue()
		}
		return null
	}

	const removeTask = (todoId) => {
		setTodos(todos.filter(id => id !== todoId))
	}

	const handleComplete = (todo_completed) => {
		setTodos(todos.filter(complete => complete !== todo_completed))
	}


	return (
		<div className={stylePage.main_container}>
			<div className={stylePage.input_container}>
				<Input type={'text'} placeholder={'Введіть нове завдання......'} value={inputValue} onChange={handleChange} />
				<Button onClick={handleSubmit}>Добавити</Button>
			</div>
			<div className={stylePage.task_container}>
				<div className={stylePage.label}>
					<div>Всіх завдань: <span className={stylePage.num}>{todos.length}</span></div>
					<div className={stylePage.did}>Виконаних:
						<span className={stylePage.num}>
							{todos.filter(item => item.complete === true).length} з {todos.length}
						</span>
					</div>
				</div>
				{
					todos.map((item) => (
						<Task
							task={item}
							key={item.id}
							handleComplete={handleComplete}
							removeTask={removeTask}
						/>
					))
				}
				{
					todos.length === 0 && (
						<Empty />
					)
				}
			</div>
		</div>
	)
}
export default Page
