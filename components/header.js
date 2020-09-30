import Link from 'next/link';

export default function Header() {
	return (
		<div className='flex flex-col md:flex-row items-center md:justify-between mb-12 pt-8'>
			<Link as='/' href='/'>
				<h2 className='text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight bg-white p-1 mb-1 md:mb-0 cursor-pointer'>
					<a className='underline-teal-400 text-black'>Blog</a>.
				</h2>
			</Link>
			<Link as='/subscribe' href='/subscribe'>
				<h4 className='text-base font-semibold tracking-tight md:tracking-tighter leading-tight bg-white p-1 self-center cursor-pointer'>
					<a className='underline-teal-400 text-gray-800'>
						Key learnings from whatever I'm doing
					</a>
					.
				</h4>
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
