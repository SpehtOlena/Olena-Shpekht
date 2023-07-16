import './menu.css'

const Menu = ({ menuItems }) => {
	return (
		<div className={"menu"}>
			{
				menuItems.map(value => <a href={`/${value}`}>{value.toUpperCase()}</a>)
			}

		</div>
	)
}
export default Menu