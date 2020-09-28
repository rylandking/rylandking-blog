import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
	return (
		<section>
			<div className='h-screen-minus-header overflow-y-auto'>
				{posts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
			<style jsx>{`
				.h-screen-minus-header {
					height: calc(100vh - 11rem);
				}
			`}</style>
		</section>
	);
}
