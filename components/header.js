import Link from 'next/link';

export default function Header() {
	return (
		<div className='flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-20 pt-8'>
			<h2 className='text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight bg-white p-1 mb-1 md:mb-0'>
				<Link href='/'>
					<a className='underline-teal-400 text-black'>Blog</a>
				</Link>
				.
			</h2>
			<h4 className='text-base font-semibold tracking-tight md:tracking-tighter leading-tight bg-white p-1 self-center'>
				<Link href='/subscribe'>
					<a className='underline-teal-400 text-gray-800'>
						Key learnings from whatever I'm doing
					</a>
				</Link>
				.
			</h4>
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
