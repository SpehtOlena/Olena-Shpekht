import { Button, Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { useState } from "react";


const Body = ({ activeUser, setActiveUser }) => {
	const [activePage, setActivePage] = useState(null);
	const menuItems = [
		{
			label: 'Posts',
			component: 'Posts'
		},
		{
			label: 'Add Post',
			component: 'AddPost'
		},
		{
			label: 'Profile',
			component: 'Profile'
		},
	]
	return (
		<Layout>
			<Header>
				<h1>{activeUser.username}</h1>
				<Button onClick={() => setActiveUser(null)} danger type={'primary'}>Exit</Button>
			</Header>
			<Content>{activePage}</Content>
			<Footer>Footer</Footer>
		</Layout >
	)
}
export default Body