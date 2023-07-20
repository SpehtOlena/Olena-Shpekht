import './Menu.css';
import Logo from '../Logo/logo'

const Menu = ({ items, setActivePage }) => {
	return (
		<div className={"header"}>
			<div className="header_container">
				<Logo>Recipe</Logo>
				<div className="menu">

					{
						items.map(value => {
							return <div onClick={() => { setActivePage(value.element) }} key={value.label} style={{ cursor: 'pointer' }}>
								{value.label}
							</div>
						})
					}
				</div>
			</div>
		</div>

	)
}

export default Menu