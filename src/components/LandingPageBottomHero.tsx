import React from 'react';
import 'twin.macro'

const LandingPageBottomHero = () => (
	<section tw='font-sans font-thin max-w-full w-screen h-screen text-center text-gray-800 grid md:grid-cols-2'>
		<div tw='h-screen w-full max-h-full bg-red-100' />
		<div tw='flex flex-col justify-center items-center h-screen w-full max-w-full max-h-full py-10'>
			<ul tw='list-disc text-left text-xl max-w-md'>
				<li>
					Cupidatat aliqua est ullamco do qui commodo culpa consectetur aliquip minim reprehenderit
					consectetur irure.
				</li>
				<li>Ullamco do ullamco consectetur ullamco sunt dolore commodo reprehenderit aliqua magna.</li>
				<li>Ad proident magna aliqua occaecat magna consectetur nisi excepteur ipsum sit.</li>
				<li>
					Veniam et exercitation nostrud exercitation laborum enim anim minim incididunt Lorem culpa culpa
					amet est.
				</li>
				<li>Magna enim cupidatat adipisicing est officia quis.</li>
			</ul>

			<button tw='bg-green-300 bg-opacity-30 text-gray-700 rounded-md w-52 py-4 mt-16 border-gray-400 border-b'>
				Buy now
			</button>
		</div>
	</section>
);

export default LandingPageBottomHero;
