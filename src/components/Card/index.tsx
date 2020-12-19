import Image from 'next/image';
import styles from './styles';

const Card = () => {
	return (
		<styles.Card>
			<div className="group-1">
				<div className="group-2">
					<Image
						className="img"
						src="/assets/photo2.png"
						alt="Picture of the author"
						width={50}
						height={50}
					/>
					<div className="content-info">
						<h3>Aliza Webber</h3>
						<h5>Interior designer</h5>
					</div>
				</div>

				<p>Designed in 2020 by Aliza Webber</p>
			</div>
		</styles.Card>
	);
};

export default Card;
