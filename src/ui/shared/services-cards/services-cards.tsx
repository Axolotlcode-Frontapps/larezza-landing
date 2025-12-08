import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";

interface Props {
  title: string;
  subtitle?: string;
  text?: string;
  link?: string;
  items?: string[];
}

export function CardServices({ title, subtitle, text, link, items }: Props) {
  return (
    <Card className="border-primary h-full bg-transparent overflow-hidden text-primary rounded-[40px]">
      <CardContent className="relative h-full flex flex-col px-4 sm:px-8 lg:px-4 xl:px-8">
        <CardHeader className="px-0 relative z-20">
          <CardTitle className="text-2xl font-bold mb-12 min-h-16 text-start mr-5">
            {title}
            {subtitle ? <span className="w-fit flex text-base">{subtitle}</span> : null}
          </CardTitle>
        </CardHeader>
        <div className="bg-primary-foreground absolute size-17.25 rounded-full -top-12.5 -right-6.5 -z-10"></div>

        {text && <p className="inline-block mb-20">{text}</p>}
        {items ? (
          <ul className="grid gap-3 mb-15">
            {items.map((item) => (
              <li className="service__text">• {item}</li>
            ))}
          </ul>
        ) : null}

        <CardFooter className="p-0 mt-auto">
          <a
            href={link}
            className="w-full text-center mt-auto text-lg py-3 border-1 border-primary rounded-lg hover:bg-primary-foreground hover:text-white transition-colors duration-300 ease-in-out"
          >
            Saber más...
          </a>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
