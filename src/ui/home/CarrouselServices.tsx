import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/ui/shared/carousel";
import { CardServices } from "@/ui/shared/services-cards/services-cards";

const missionData = [
	{
		title: "Masajes",
		text: "Experiencias personalizadas que drenan, relajan y esculpen tu cuerpo con técnicas exclusivas, creando bienestar profundo y resultados visibles.",
		link: "#massages",
	},
	{
		title: "Faciales",
		text: "Tratamientos faciales de estética avanzada que iluminan, unifican y renuevan la piel con precisión clínica, logrando un acabado radiante luminoso.",
		link: "#facials",
	},
	{
		title: "Depilación",
		text: "Depilación láser con diodo de última generación que reduce progresivamente el vello, ofreciendo suavidad duradera, seguridad total y resultados elegantes.",
		link: "#hair-removal",
	},
	{
		title: "Aparatología Corporal",
		text: "Tecnología corporal avanzada que redefine contornos sin cirugía mediante cavitación, radiofrecuencia, vacuum, EMS y criolipólisis, logrando firmeza visible natural progresiva.",
		link: "#apparatus",
	},
];

export function ServicesCarrousel() {
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
				{missionData.map((service) => (
					<CarouselItem
						key={service.title}
						className=' sm:basis-1/2 md:basis-full lg:basis-1/2'
					>
						<CardServices {...service} />
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
