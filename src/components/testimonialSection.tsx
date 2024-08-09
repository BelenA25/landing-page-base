import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { TypographyH2, TypographyP } from "./ui/typography";

export default function Testimonials() {
    return (
        <section className="my-12 mx-8">
            <div className="flex items-center justify-between">
                <div className="text-right w-1/3">
                    <TypographyH2 alignment="right">
                        These are the stories from our clients
                    </TypographyH2>
                </div>
                <div className="flex-1 relative ml-8">
                    <Carousel className="relative">
                        <CarouselPrevious className="absolute z-10  left-0 top-1/2 transform -translate-y-1/2" />
                        <CarouselContent>
                            <CarouselItem className="p-8 border rounded-lg shadow-md">
                                <TypographyP alignment="center">"This product changed my life. I recommend it 100%!"</TypographyP>
                                <TypographyP alignment="center" fontWeight="semibold">- Client 1</TypographyP>
                            </CarouselItem>
                            <CarouselItem className="p-8 border rounded-lg shadow-md">
                                <TypographyP alignment="center">"The customer service was exceptional."</TypographyP>
                                <TypographyP alignment="center" fontWeight="semibold">- Client 2</TypographyP>
                            </CarouselItem>
                            <CarouselItem className="p-8 border rounded-lg shadow-md">
                                <TypographyP alignment="center">"Great quality and fast delivery!"</TypographyP>
                                <TypographyP alignment="center" fontWeight="semibold">- Client 3</TypographyP>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
