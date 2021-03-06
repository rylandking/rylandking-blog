import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import ExitIntentDiv from '../../components/exit-intent-div';
import Modal from '../../components/modal';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import { GlobalProvider } from '../../context/GlobalState';

export default function Post({ post, morePosts, preview }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<>
			<GlobalProvider>
				<Layout preview={preview}>
					<Container>
						<Header />
						{router.isFallback ? (
							<PostTitle>Loading…</PostTitle>
						) : (
							<>
								<ExitIntentDiv />
								<article>
									<Head>
										<title>
											{post.title} | {CMS_NAME}
										</title>
										<meta property='og:image' content={post.coverImage} />
									</Head>
									<PostHeader
										title={post.title}
										coverImage={post.coverImage}
										date={post.date}
										author={post.author}
									/>
									<PostBody
										content={post.content}
										tweetEmbed={post.tweetEmbed}
									/>
								</article>
								<SectionSeparator />
								<h2 className='text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight bg-white px-1 mb-12'>
									<a href='/' className='underline-teal-400 text-black'>
										More
									</a>
									.
								</h2>
								<div className='mb-40'>
									{morePosts.length > 0 && (
										<MoreStories posts={morePosts} style={``} />
									)}
								</div>
								<style jsx global>
									{`
										.underline-teal-400 {
											text-decoration: underline;
											text-decoration-color: #4fd1c5;
										}
										a {
											text-decoration: underline;
											text-decoration-color: #4fd1c5;
										}
										ul {
											list-style-type: disc;
											padding-left: 3rem;
										}
										ol {
											list-style-type: decimal;
											padding-left: 3rem;
										}
										blockquote {
											margin-top: 1.25rem;
											margin-bottom: 1.25rem;
											margin-left: 2rem;
											padding-left: 1rem;
											border-left: 2px solid #ccc;
											color: #2d3748 !important;
										}
									`}
								</style>
							</>
						)}
						<Modal />
					</Container>
				</Layout>
			</GlobalProvider>
		</>
	);
}

export async function getStaticProps({ params, preview = false }) {
	const data = await getPostAndMorePosts(params.slug, preview);
	return {
		props: {
			preview,
			post: data?.post || null,
			morePosts: data?.morePosts || null,
		},
	};
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug();
	return {
		paths:
			allPosts?.map((post) => ({
				params: {
					slug: post.slug,
				},
			})) || [],
		fallback: true,
	};
}
