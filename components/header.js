import Link from 'next/link';

export default function Header() {
	return (
		<div className='flex justify-between mb-16 md:mb-20 pt-8'>
			<h2 className='text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight'>
				<Link href='/'>
					<a className='underline-teal-400 text-black'>Blog</a>
				</Link>
				.
			</h2>
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
