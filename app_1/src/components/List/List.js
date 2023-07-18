import ListCard from "./ListCard";
import './List.css';

const recipesLink = [
	{
		name: "Борщ",
		ingredients: ["буряк", "картопля", "морква"],
		img: "https://picsum.photos/id/256/300/200"
	},
	{
		name: "Паста карбонара",
		ingredients: ["спагетті", "бекон", "яйця"],
		img: "https://picsum.photos/id/257/300/200"
	},
	{
		name: "Салат Цезар",
		ingredients: ["куряче філе", "листовий салат", "грінки"],
		img: "https://picsum.photos/id/258/300/200"
	},
	{
		name: "Суші",
		ingredients: ["рис", "риба", "огірок"],
		img: "https://picsum.photos/id/259/300/200"
	},
	{
		name: "Стейк",
		ingredients: ["м'ясо", "олія", "спеції"],
		img: "https://picsum.photos/id/260/300/200"
	},
	{
		name: "Пельмені",
		ingredients: ["м'ясний фарш", "тісто", "спеції"],
		img: "https://picsum.photos/id/261/300/200"
	},
	{
		name: "Грецький салат",
		ingredients: ["помідори", "огірки", "оливки"],
		img: "https://picsum.photos/id/263/300/200"
	},
	{
		name: "Лазанья",
		ingredients: ["м'ясний соус", "білий соус", "сир моцарелла"],
		img: "https://picsum.photos/id/248/300/200"
	},
	{
		name: "Голубці",
		ingredients: ["м'ясний фарш", "капуста", "рис"],
		img: "https://picsum.photos/id/201/300/200"
	},
	{
		name: "Чізбургер",
		ingredients: ["м'ясний фарш", "булка", "кетчуп"],
		img: "https://picsum.photos/id/213/300/200"
	},
	{
		name: "Біф Велінгтон",
		ingredients: ["Телятина", "печериці", "тісто"],
		img: "https://picsum.photos/id/208/300/200"
	},
	{
		name: "Палюшки",
		ingredients: ["картопля", "борошно", "сметана"],
		img: "https://picsum.photos/id/238/300/200"
	},
	{
		name: "Паелья",
		ingredients: ["рис", "мідії", "томати"],
		img: "https://picsum.photos/id/228/300/200"
	},
	{
		name: "Бограч",
		ingredients: ["м'ясо", "перець", "томати"],
		img: "https://picsum.photos/id/221/300/200"
	},
	{
		name: "Капрезе",
		ingredients: ["томати", "базилік", "сир моцарелла"],
		img: "https://picsum.photos/id/217/300/200"
	},
	{
		name: "Капкейки",
		ingredients: ["борошно", "масло", "вершки"],
		img: "https://picsum.photos/id/218/300/200"
	}
];

const List = () => {
	return (
		<div className="ListWrapper">
			<div className="List_container">
				{
					recipesLink.map(value => <ListCard item={value}></ListCard>)
				}
			</div>
		</div>

	)
}

export default List