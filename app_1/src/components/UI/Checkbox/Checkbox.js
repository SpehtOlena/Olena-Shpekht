import styleCheck from './Checkbox.module.css'

const Checkbox = () => {
	return (
		<div>
			<input type={'checkbox'} className={styleCheck.checkbox} />
		</div>
	)
}
export default Checkbox