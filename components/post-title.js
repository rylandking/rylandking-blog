export default function PostTitle({ children }) {
	return (
		<h1 className='text-2xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-4 md:mb-6 text-left md:text-left'>
			{children}
		</h1>
	);
}