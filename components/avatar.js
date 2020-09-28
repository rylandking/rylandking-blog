export default function Avatar({ name, picture }) {
	return (
		<a href='https://twitter.com/rylandking' target='_blank'>
			<div className='fixed h-12 w-40 bottom-0 right-0 tracking-tighter justify-center border hover:border-teal-400 transition ease-in-out duration-200 rounded-tl-lg bg-white text-base font-light bg-white'>
				<div className='flex h-full justify-center'>
					<div className='flex-shrink-0 self-center pr-2'>
						<img
							className='h-8 w-8 object-cover rounded-full'
							src={picture}
							alt={name}
						/>
					</div>
					<span className='self-center'> by {name}</span>
				</div>
			</div>
		</a>
	);
}
