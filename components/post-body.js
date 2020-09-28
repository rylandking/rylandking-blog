import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';

export default function PostBody({ content }) {
	return (
		<div className='max-w-3xl'>
			<BlockContent blocks={content} className={markdownStyles.markdown} />
		</div>
	);
}
