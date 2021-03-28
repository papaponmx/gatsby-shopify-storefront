import "twin.macro";

import { graphql, useStaticQuery } from "gatsby";

import Button from "../Button";
import Img from "gatsby-image";
import React from "react";

const query = graphql`
	query {
		image: file(relativePath: { eq: "cuarzo.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1024, quality: 100) {
					...GatsbyImageSharpFluid
					...GatsbyImageSharpFluidLimitPresentationSize
				}
			}
		}
	}
`;

const LandingPageHero: React.FC = (): JSX.Element => {
	const data = useStaticQuery(query);

	return (
		<div tw="grid grid-cols-1">
			<header>
        <h2 tw='font-serif text-center text-6xl mb-6'>{'Shakti Gemas'}</h2>
      </header>
      <section tw="font-sans font-thin max-w-full lg:min-h-screen text-center text-gray-800 grid grid-cols-2 grid-rows-1 py-0">
				<div tw="flex flex-col justify-center items-center lg:h-screen w-full max-w-full max-h-full lg:col-span-1 col-span-2">
					{/* <h2 tw="lg:text-5xl text-4xl max-w-lg lg:mb-14">
						{'Que la magia y la sabiduría de los cristales guíen tu camino'}
					</h2> */}

					<button tw="bg-green-300 bg-opacity-30 text-gray-700 rounded-md w-52 py-4 lg:visible invisible">
						{'Comprar'}
					</button>
				</div>

				<Img
					alt="Texto que describe Las mejores gemas de la tierra"
					key={1}
					fluid={data.image.childImageSharp.fluid}
					tw="lg:col-span-1 col-span-2 w-screen max-w-full"
				/>
				<div tw=" flex flex-col justify-center items-center w-screen col-span-2 visible py-10  lg:hidden">
          <h1 tw='text-4xl px-4 mb-6'>Botella Cuarzo Ahumado</h1>
{/* TODO:  Add product description */}

					<Button />
				</div>
			</section>
		</div>
	);
};

export default LandingPageHero;
