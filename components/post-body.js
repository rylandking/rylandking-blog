import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

const serializers = {
	types: {
		youtube: ({ node }) => {
			const { url } = node;
			const id = getYouTubeId(url);
			return <YouTube videoId={id} />;
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
