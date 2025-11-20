import Image1 from "@/assets/images/1.png";
import Image2 from "@/assets/images/2.png";
import Image3 from "@/assets/images/3.png";
import Image4 from "@/assets/images/4.png";
import Image5 from "@/assets/images/5.png";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/ui/shared/carousel";

const images = [Image1, Image2, Image3, Image4, Image5];

export function Carrousel() {
	return (
		<Carousel opts={{ align: "start", loop: true }}>
			<CarouselContent>
				{images.map((img, index) => (
					<CarouselItem
						key={`carousel-item-${
							// biome-ignore lint/suspicious/noArrayIndexKey: static images array that doesn't change
							index
						}`}
					>
						<div className='h-auto mx-auto flex justify-center'>
							<img
								src={img.src}
								alt={`Slide ${index + 1}`}
								className='md:h-100 lg:h-150'
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className='p-5 md:p-6 bg-primary'>
				Prev
			</CarouselPrevious>
			<CarouselNext className='p-5 md:p-6 bg-primary'>Next</CarouselNext>
		</Carousel>
	);
}
