import React, { useContext, useEffect } from 'react';
import Subscribe from '../components/subscribe';
import { GlobalContext } from '../context/GlobalState';

export default function Modal({ openOnLoadWithMethod }) {
	const {
		openSubscribeModal,
		closeSubcribeModal,
		isSubscribeModalOpen,
	} = useContext(GlobalContext);

	if (openOnLoadWithMethod) {
		useEffect(() => {
			openSubscribeModal(openOnLoadWithMethod);
		}, []);
	}

	function outsideClick(e) {
		if (e.target !== e.currentTarget) return;
		closeSubcribeModal();
	}

	return (
		<div
			onClick={(e) => outsideClick(e)}
			className={`z-20 fixed left-0 top-0 h-full w-full bg-white bg-opacity-75 ${
				isSubscribeModalOpen ? '' : 'hidden'
			}`}>
			<div className='w-full h-full sm:h-auto sm:w-7/12 lg:w-5/12 xl:w-1/3 m-auto sm:mt-32 sm:mb-48 bg-white border fixed bottom-0 inset-x-0 inset-0 flex items-center justify-center cursor-default'>
				<div className='block relative w-full h-full py-2 px-8'>
					<span
						onClick={(e) => outsideClick(e)}
						className='absolute top-0 right-0 h-16 w-16 sm:h-12 sm:w-12 pb-2 flex items-center justify-center text-6xl text-black hover:text-gray-700 cursor-pointer'>
						&times;
					</span>
					<div className='flex w-full mt-20 sm:mt-10 h-20 items-center'>
						<div className='text-black text-sm sm:text-base font-bold px-4 h-10 flex items-center transform -skew-y-3 border border-black'>
							Hey, I'm&nbsp;
							<span className='underline-teal-400'>Ryland</span>
						</div>
						<div className='flex relative z-0 overflow-hidden ml-4'>
							<img
								className='relative z-30 inline-block h-12 w-12 rounded-full text-white shadow-solid object-cover'
								src='/ryland-king.jpg'
								alt=''
							/>
						</div>
					</div>
					<div className='block w-full text-gray-800 font-semibold px-2'>
						<p className='mt-4'>
							Every few days, I share{' '}
							<span className='font-extrabold'>
								key learnings from whatever I'm doing
							</span>{' '}
							in my newsletter.
						</p>
						<p className='mt-3'>It's short, sweet and practical.</p>
						<p className='mt-3'>
							And it's <span className='font-extrabold'>brand new</span>. I'd
							love you to join.
						</p>
					</div>
					<div className='w-full mt-8'>
						<Subscribe
							mt='mt-8'
							width='w-full'
							buttonBorder='border-gray-600'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
