import React from 'react';
import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
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
			return <YouTube videoId={id} />;
		},
		figure: ({ node }) => {
			const { image, alt } = node;
			return (
				<img
					src={urlFor(image.asset).width(1920).height(1080).url()}
					alt={`${alt}`}
				/>
			);
		},
	},
};

export default function PostBody({ content }) {
	return (
		<div className='max-w-3xl'>
			<BlockContent
				blocks={content}
				serializers={serializers}
				className={markdownStyles.markdown}
			/>
		</div>
	);
}
