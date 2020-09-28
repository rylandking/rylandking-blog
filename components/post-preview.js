import React, { useState } from 'react';
import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';

export default function PostPreview({ title, slug }) {
	const [hoveredPost, setHoveredPost] = useState('');

	return (
		<div>
			<div
				className={`p-2 pl-4 mb-4 bg-black opacity-100 md:opacity-75 rounded-lg cursor-pointer transition ease-in-out duration-300 border border-teal-400 md:border-teal-400 ${
					hoveredPost === title && 'md:opacity-100 md:border-teal-400'
				}`}
				onMouseEnter={() => setHoveredPost(title)}
				onMouseLeave={() => setHoveredPost('')}>
				<h3 className={`text-xl leading-tight font-semibold text-white`}>
					<Link as={`/posts/${slug}`} href='/posts/[slug]'>
						<a className=''>{title}</a>
					</Link>
				</h3>
			</div>
		</div>
	);
}
