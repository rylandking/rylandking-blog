import Link from 'next/link';

export default function PostPreview({ title, slug }) {
	return (
		<div>
			<div
				className={`p-2 pl-4 mb-4 rounded-lg cursor-pointer transition ease-in-out duration-300`}>
				<h3
					className={`leading-tight font-semibold text-xl text-black underline-teal-400`}>
					<Link as={`/posts/${slug}`} href='/posts/[slug]'>
						<a className=''>{title}</a>
					</Link>
				</h3>
			</div>
			<style jsx>
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
