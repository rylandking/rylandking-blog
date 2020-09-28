import Avatar from '../components/avatar';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, author }) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<Avatar name={author.name} picture={author.picture} />
		</>
	);
}
