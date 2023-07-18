import './menu.css';
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

// const Menu = ({ menuItems }) => {
// 	return (
// 		<div className={"menu"}>
// 			{
// 				menuItems.map(value => <a href={`/${value}`}>{value.toUpperCase()}</a>)
// 			}

// 		</div>
// 	)
// }
export default Menu