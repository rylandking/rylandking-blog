import Container from '../components/container';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';

export default function Index({ allPosts, preview }) {
	// const heroPost = allPosts[0];
	// const morePosts = allPosts.slice(1);
	const styles = {
		heroImage: {
			backgroundImage: `url(${'ryland-king-surfing.jpg'})`,
		},
	};

	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>{CMS_NAME}</title>
				</Head>
				<div
					className='bg-cover bg-center bg-no-repeat h-screen'
					style={styles.heroImage}>
					<Container>
						<Intro />
						{/* {heroPost && (
							<HeroPost
								title={heroPost.title}
								coverImage={heroPost.coverImage}
								date={heroPost.date}
								author={heroPost.author}
								slug={heroPost.slug}
								excerpt={heroPost.excerpt}
							/>
						)} */}
						{allPosts.length > 0 && <MoreStories posts={allPosts} />}
					</Container>
				</div>
			</Layout>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allPosts = await getAllPostsForHome(preview);
	return {
		props: { allPosts, preview },
	};
}
