import Button from './Button';
import '../styles/cards.css';

const Cards = ({ pic}) => {
	return (
		<div className="cards">
			<div className="cards__content">
				<h2>Ready for autumn collection</h2>
				<p>Treat yourself to some of our brand new autumn <br /> collection - all with the wonderfull colours <br /> surrounding you.</p>
				<Button url="/" variant="outlined" text="PURCHASE NOW" />
			</div>
			<img src={pic} alt="collection img" />
		</div>
	)
}

export default Cards