import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { TypographyH2 } from "./ui/typography";

export default function Testimonials() {
  return (
    <section className="my-12 mx-8">
      <div className="flex items-center justify-between">
        <div className="text-right w-1/3">
         <TypographyH2 alignment="right">
          Estas son las historias de nuestros clientes
        </TypographyH2>
        </div>
        <div className="flex-1 relative ml-8">
          <Carousel className="relative">
            <CarouselPrevious className="absolute z-10  left-0 top-1/2 transform -translate-y-1/2" />
            <CarouselContent>
              <CarouselItem className="p-8 border rounded-lg shadow-md">
                <p className="text-center">"Este producto cambió mi vida. ¡Recomiendo al 100%!"</p>
                <p className="text-center font-semibold mt-4">- Cliente 1</p>
              </CarouselItem>
              <CarouselItem className="p-8 border rounded-lg shadow-md">
                <p className="text-center">"El servicio al cliente fue excepcional."</p>
                <p className="text-center font-semibold mt-4">- Cliente 2</p>
              </CarouselItem>
              <CarouselItem className="p-8 border rounded-lg shadow-md">
                <p className="text-center">"¡Gran calidad y entrega rápida!"</p>
                <p className="text-center font-semibold mt-4">- Cliente 3</p>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
