import { MdTrendingFlat } from 'react-icons/md';
import Card from 'components/Card';

import Image from 'next/image';
import styles from './styles';

const Content = () => {
	return (
		<styles.Content>
			<section className="left">
				<h1>Modern interior</h1>
				<p>
					A full-Service residential &<br /> commercial interior
					design and staging company offering professional organizing
					& <br /> eco-services.
				</p>
				<a href="#">
					Read more{' '}
					<MdTrendingFlat
						className="next-icon"
						size={22}
						color="#FFF"
					/>
				</a>
			</section>

			<section className="right">
				<div className="content-image">
					<Image
						src="/assets/photo1.png"
						alt="Picture of the author"
						width={800}
						height={550}
					/>
					<Card />
				</div>
			</section>
		</styles.Content>
	);
};

export default Content;
