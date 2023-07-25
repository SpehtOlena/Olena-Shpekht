import ListCard from "./ListCard";
import './List.css';
import recipesLink from "./ListArray";
import DetailsCard from "../DetailsCard/DetailsCard";


export const List = () => {
	return (
		<div className="ListWrapper">
			<div className="List_container">
				{
					recipesLink.map(value => <ListCard item={value} key={value.ingredients} />)
				}
			</div>
		</div>

	)
}

export const Detail = () => {
	return (
		<div className="search_container">
			<div className="searchContent">
				{
					recipesLink.map(value => <DetailsCard item={value} key={value.ingredients} />)
				}

			</div>
		</div>


	)
}

