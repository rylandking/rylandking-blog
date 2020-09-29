import Link from 'next/link';

export default function PostPreview({ title, slug }) {
	return (
		<div>
			<Link as={`/posts/${slug}`} href='/posts/[slug]'>
				<div
					className={`p-2 pl-4 mb-4 bg-white md:bg-opacity-75 hover:bg-opacity-100 cursor-pointer transition ease-in-out duration-300`}>
					<h3
						className={`leading-tight font-semibold text-xl text-black underline-teal-400`}>
						<a className=''>{title}</a>
					</h3>
				</div>
			</Link>
			<style jsx global>
				{`
					.underline-teal-400 {
						text-decoration: underline;
						text-decoration-color: #4fd1c5;
					}
				`}
			</style>
		</div>
	);
}
