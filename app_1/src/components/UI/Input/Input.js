import styleInput from './input.module.css'

const Input = ({ type, value, onChange, placeholder }) => {

	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={styleInput.input}
		/>
	)
}
export default Input