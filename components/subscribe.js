export default function Subscribe({ mt, width, buttonBorder }) {
	return (
		<div className={`flex mx-auto ${width} ${mt} mb-5`}>
			<div className='mt-1 relative block w-full rounded-md shadow-sm'>
				<input
					id='email'
					className='form-input block w-full h-12 sm:leading-5 focus:outline-none text-center border placeholder-gray-600 text-gray-700 font-semibold'
					placeholder='my@email.com'></input>
				<div
					className={`w-full flex justify-center bg-white h-12 mt-3 border ${buttonBorder} hover:border-teal-400`}>
					<button className='w-full text-center bg-white text-black font-bold text-lg leading-6 py-2'>
						<span className='underline-teal-400'>Start Learning</span>.
					</button>
				</div>
			</div>
		</div>
	);
}
