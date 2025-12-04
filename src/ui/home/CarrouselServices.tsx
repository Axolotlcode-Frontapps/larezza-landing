import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/ui/shared/carousel";
import { CardServices } from "@/ui/shared/services-cards/services-cards";

interface Props {
	data: {
		title: string;
		text?: string;
		link?:	string;
		items?: string[];
	}[];
};


export function ServicesCarrousel({ data }: Props) {
	return (
		<Carousel
			className='h-full'
			opts={{ align: "start", loop: true }}
			plugins={[
				Autoplay({
					delay: 5000,
				}),
			]}
		>
			<CarouselContent className='p-1'>
				{data.map((service) => (
					<CarouselItem
						key={service.title}
						className=' sm:basis-1/2 md:basis-full lg:basis-1/2'
					>
						<CardServices {...service} />
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="flex items-center justify-center gap-4 py-3 ">
				<CarouselPrevious className="bg-transparent! border-0 shadow-none" />
				<CarouselDots className="mt-0" totalSlides={data.length} />
				<CarouselNext className="bg-transparent! border-0 shadow-none" />
      </div>
		</Carousel>
	);
}
