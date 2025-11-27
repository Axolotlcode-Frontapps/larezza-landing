import * as React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";

interface Props {
	title: string;
	text1: string;
	text2: string;
	text3: string;
}

export function CardServices({ title, text1, text2, text3 }: Props) {
	return (
		<Card className='border-primary h-full bg-transparent overflow-hidden'>
			<CardContent className='relative h-full flex flex-col'>
				<CardHeader className='px-0 relative z-20'>
					<CardTitle className='text-2xl font-bold'>{title}</CardTitle>
				</CardHeader>
				<div className='bg-primary-foreground absolute size-17.25 rounded-full -top-12.5 -right-6.5 -z-10'></div>

				<ul className='text-lg mb-10'>
					<li className='mb-2'>{text1}</li>
					<li className='mb-2'>{text2}</li>
					<li>{text3}</li>
				</ul>

				<CardFooter className='p-0 mt-auto'>
					<a
						href='https://wa.link/dc586b'
						target='_blank'
						rel='noopener noreferrer'
						className='w-full text-center mt-auto text-lg py-3 border-1 border-primary rounded-lg hover:bg-primary-foreground hover:text-white transition-colors duration-300 ease-in-out'
					>
						Saber más...
					</a>
				</CardFooter>
			</CardContent>
		</Card>
	);
}
