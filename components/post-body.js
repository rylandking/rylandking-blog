import React from 'react';
import Subscribe from './subscribe';
import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

import sanityClient from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const serializers = {
	types: {
		youtube: ({ node }) => {
			const { url } = node;
			const id = getYouTubeId(url);
			return (
				<div className='flex justify-center'>
					<YouTube videoId={id} />
				</div>
			);
		},
		figure: ({ node }) => {
			const { image, alt } = node;
			return (
				<div className='flex justify-center'>
					<img
						src={urlFor(image.asset).width(1920).height(1080).url()}
						alt={`${alt}`}
					/>
				</div>
			);
		},
		twitter: ({ node }) => {
			// console.log(node.id);
			return (
				<div className='flex justify-center'>
					<TwitterTweetEmbed tweetId={node.id} />
				</div>
			);
		},
	},
};

export default function PostBody({ content, tweetEmbed }) {
	const tweetId = tweetEmbed.split('status/')[1].split('?')[0];

	return (
		<>
			<div className='max-w-3xl mx-auto'>
				<BlockContent
					blocks={content}
					serializers={serializers}
					className={markdownStyles.markdown}
				/>
				<div className='mt-5'>
					Ok, thank you for reading!
					<br></br>
					<br></br>
					I'll be honest, this post did take a few hours to put together.
					<br></br>
					<br></br>
					If you’d like to say, "Thank you" please retweet the thread on
					Twitter.
					<br></br>
					<br></br>
					That would be the most meaningful way to say, "Thanks".
				</div>
				<div className='flex justify-center mt-4'>
					<TwitterTweetEmbed tweetId={tweetId} />
				</div>
				<div className='mt-5'>
					If you'd like more key learnings, join my email list below.
					<br></br>
					<br></br>
					Yew!
					<br></br>
					–Ryland
					<Subscribe
						mt='mt-8'
						width='w-3/4 md:w-1/2 lg:w-2/3'
						buttonBorder='border-gray-600'
					/>
				</div>
			</div>
			<style jsx global>{`
				iframe {
					width: 88vw !important;
					max-width: 640px;
				}
			`}</style>
		</>
	);
}
