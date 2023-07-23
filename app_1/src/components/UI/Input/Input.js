import styleInput from './Input.module.css'

const Input = () => {
	return (
		<input type={'text'} placeholder={'Adicione uma nova tarefa'} className={styleInput.input} />
	)
}
export default Input