const Menu = ({ menuItems, setActivePage }) => {
	return (
		<div>
			{
				menuItems.map((value, index) => (
					<span onClick={() => setActivePage(value.componen)} key={index}>
						{value.lable}
					</span>
				))
			}
		</div>
	)
}
export default Menu