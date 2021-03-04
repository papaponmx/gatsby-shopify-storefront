import 'twin.macro';

import React from 'react';

const LandingPageHero : React.FC = (): JSX.Element => (
	<div tw='grid grid-cols-1'>
		<section tw='font-sans font-thin max-w-full lg:min-h-screen text-center text-gray-800 grid grid-cols-2 grid-rows-1 py-0'>
			<div tw='flex flex-col justify-center items-center lg:h-screen w-full max-w-full max-h-full lg:col-span-1 col-span-2'>
				<h1 tw='lg:text-8xl text-6xl max-w-lg lg:mb-14'>Describe your product or service</h1>

				<button tw='bg-green-300 bg-opacity-30 text-gray-700 rounded-md w-52 py-4 lg:visible invisible'>
					Buy now
				</button>
			</div>
			<div tw='lg:col-span-1 col-span-2 lg:h-screen h-56 w-screen max-w-full bg-pink-100' />
			<div tw='bg-indigo-600 flex flex-col justify-center items-center w-screen col-span-2 visible py-10  lg:hidden'>
				<button tw='bg-green-300 bg-opacity-30 text-gray-700 rounded-md w-52 py-4 '>Buy now</button>
			</div>
		</section>
	</div>
);

export default LandingPageHero;
