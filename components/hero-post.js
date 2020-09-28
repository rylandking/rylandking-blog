import React, { useState } from 'react';
import Link from 'next/link';

export default function HeroPost({ title, slug }) {
	const [hoveredPost, setHoveredPost] = useState('');

	return (
		<section>
			<div
				className={`p-2 pl-4 bg-black opacity-25 rounded-lg cursor-pointer transition ease-in-out duration-300 mb-5 ${
					hoveredPost === title && 'text-white opacity-50'
				}`}
				onMouseEnter={() => setHoveredPost(title)}
				onMouseLeave={() => setHoveredPost('')}>
				<h3 className='text-xl leading-tight font-semibold text-white'>
					<Link as={`/posts/${slug}`} href='/posts/[slug]'>
						<a className=''>{title}</a>
					</Link>
				</h3>
			</div>
		</section>
	);
}
