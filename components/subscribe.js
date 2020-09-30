import { useState } from 'react';
import { createSubscriber } from '../client/api-request';

export default function Subscribe({ mt, width, method, buttonBorder }) {
	const [errorMessage, setErrorMessage] = useState(null);
	const [isSuccess, setSuccess] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(null);
	const [email, setEmail] = useState('');

	const submit = async (evt) => {
		evt.preventDefault();
		if (!email) return;
		if (isSubmitting) return;
		setIsSubmitting(true);
		try {
			await createSubscriber({ email, method });
			setSuccess(true);
			setIsSubmitting(false);
		} catch (e) {
			console.error('Error saving email', e);
			setErrorMessage('Error saving this email');
			setIsSubmitting(false);
		}
	};

	return (
		<div className={`flex mx-auto ${width} ${mt} mb-5`}>
			<form className='flex w-full'>
				<div className='w-full relative block w-full'>
					{errorMessage && (
						<div className='w-full text-center bg-white text-black font-bold text-lg leading-6 p-2 underline-red-400'>
							{errorMessage}
						</div>
					)}
					{isSuccess && (
						<>
							<div className='w-full text-center bg-white text-black font-bold text-lg leading-6 p-1'>
								Thanks! I'll email you once the next learning is ready!
							</div>
							<br></br>
							<div className='w-full text-center bg-white text-black font-bold text-lg leading-6 p-1'>
								<a href='/'>Learn from past posts here</a>.
							</div>
						</>
					)}
					{!isSuccess && !errorMessage && (
						<>
							<input
								id='email'
								className='form-input block w-full h-12 sm:leading-5 focus:outline-none text-center border placeholder-gray-600 text-gray-700 font-semibold'
								placeholder='my@email.com'
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
							<div
								className={`w-full flex justify-center bg-white h-12 mt-3 border ${buttonBorder} hover:border-teal-400 focus:outline-none`}>
								<button
									onClick={submit}
									type='submit'
									className='w-full text-center bg-white text-black font-bold text-lg leading-6 py-2 focus:outline-none'>
									<span className='underline-teal-400'>
										{isSubmitting ? 'Submitting...' : 'I Want Key Learnings'}
									</span>
									.
								</button>
							</div>
						</>
					)}
				</div>
			</form>
			{/* <div className='mt-1 relative block w-full rounded-md shadow-sm'>
				<input
					id='email'
					className='form-input block w-full h-12 sm:leading-5 focus:outline-none text-center border placeholder-gray-600 text-gray-700 font-semibold'
					placeholder='my@email.com'
					required='required'></input>
				<div
					className={`w-full flex justify-center bg-white h-12 mt-3 border ${buttonBorder} hover:border-teal-400`}>
					<button
						type='submit'
						className='w-full text-center bg-white text-black font-bold text-lg leading-6 py-2'>
						<span className='underline-teal-400'>Get Key Learnings</span>.
					</button>
				</div>
			</div> */}
		</div>
	);
}
