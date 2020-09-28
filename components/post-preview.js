import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PostPreview({ title, slug }) {
	const [hoveredPost, setHoveredPost] = useState('');
	const router = useRouter();

	let divStyle;
	let textStyle;

	if (router.pathname == `/posts/[slug]`) {
		divStyle = ``;
		textStyle = `text-black underline-teal-400`;
	} else {
		divStyle = `pl-4 bg-black bg-opacity-50 md:bg-opacity-25 hover:bg-opacity-50 border border-gray-300`;
		textStyle = `text-white underline-teal-400`;
	}

	return (
		<div>
			<div
				className={`p-2 mb-4 ${divStyle} rounded-lg cursor-pointer transition ease-in-out duration-300 ${
					hoveredPost === title && 'md:opacity-100'
				}`}
				onMouseEnter={() => setHoveredPost(title)}
				onMouseLeave={() => setHoveredPost('')}>
				<h3 className={`leading-tight font-semibold text-xl ${textStyle}`}>
					<Link as={`/posts/${slug}`} href='/posts/[slug]'>
						<a className=''>{title}</a>
					</Link>
				</h3>
			</div>
			<style jsx>
				{`
					.underline-teal-400 {
						text-decoration: underline;
						text-decoration-color: #4fd1c5 !important;
					}
				`}
			</style>
		</div>
	);
}
