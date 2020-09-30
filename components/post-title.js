export default function PostTitle({ children }) {
	return (
		<h1 className='text-2xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-8 md:mb-12 mt-10 md:mt-16 text-left md:text-center'>
			{children}
		</h1>
	);
}
