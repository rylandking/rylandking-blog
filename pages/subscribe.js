import Container from '../components/container';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Header from '../components/header';
import Layout from '../components/layout';
import Avatar from '../components/avatar';
import Subscribe from '../components/subscribe';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';

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
					<title>Subscribe. | {CMS_NAME}</title>
				</Head>
				<div
					className='bg-cover bg-center bg-no-repeat h-screen'
					style={styles.heroImage}>
					<Container>
						<Header />
						{/* <Intro /> */}
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
						<Subscribe
							mt='mt-32'
							width='w-11/12 md:w-8/12 lg:w-4/12'
							buttonBorder=''
							method='subscribe'
						/>
					</Container>
				</div>
				<Avatar name={CMS_NAME} picture={HOME_OG_IMAGE_URL} />
				<style jsx global>{`
					.h-screen-minus-header {
						height: calc(100vh - 11rem);
					}
					.underline-teal-400 {
						text-decoration: underline;
						text-decoration-color: #4fd1c5;
					}
					a {
						text-decoration: underline;
						text-decoration-color: #4fd1c5;
					}
					.underline-red-400 {
						text-decoration: underline;
						text-decoration-color: #f56565;
					}
				`}</style>
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
