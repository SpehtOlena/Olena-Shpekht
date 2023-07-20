import ListCard from "./ListCard";
import './List.css';
import recipesLink from "./ListArray";


const List = () => {
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

export default List;

