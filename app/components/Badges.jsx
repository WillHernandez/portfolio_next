import Image from 'next/image';
import { badges } from '../data';

const Badges = () => (
	<div className="outerContainer container badges">
		<div className="innerContainer">
			<h3>Certifications - Badges</h3>
			<RenderBadges />
		</div>
	</div>
)

const RenderBadges = () => (
	badges.map(badge => (
		<div key={badge.key} className="badge">
			<a href={badge.href} target='_blank' rel='noreferrer'>
				<Image width={283} height={261} src={badge.img} alt="" />
			</a>
			<a href={badge.href} target='_blank' rel='noreferrer'><p>{badge.title}</p></a>
		</div>
	))
)

export default Badges;