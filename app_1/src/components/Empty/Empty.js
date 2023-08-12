import style from './Empty.module.css'
import Clipboard from './Clipboard.svg'

const Empty = () => {
	return (
		<div className={style.empty}>
			<img src={Clipboard} alt="clipboard" />
			<div className={style.text}>
				<span className={style.bold}>У вас немає завдань</span>
				Створюйте та виконуйте завдання
			</div>

		</div>
	)
}
export default Empty