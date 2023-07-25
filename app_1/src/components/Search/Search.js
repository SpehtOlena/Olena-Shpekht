import './Search.css';
import DetailsCard from '../DetailsCard/DetailsCard';
import DetailsIngr from '../DetailsIngr/DetailsIngr';
import Description from '../Description/Description';

const Search = () => {
	return (
		<div className="Search">
			<div className="search_container">
				<DetailsCard />
				<div className="searchContent">
					<DetailsIngr />
					<Description />

				</div>
			</div>
		</div>
	)
}
export default Search