import { createClient } from '@/utils/supabase/server'; 
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Typography from "./Typography/typography";

export default async function Testimonials() {
    const supabase = createClient();
    const { data: testimonials } = await supabase.from("Testimonial").select();

    if (!testimonials) {
        return <Typography>No testimonials found</Typography>;
    }

    return (
        <section className="my-12 mx-8">
            <div className="flex items-center justify-between max-w-screen-lg mx-auto">
                <div className="text-right w-1/3">
                    <Typography tag="h2" alignment="right">
                        These are the stories from our clients
                    </Typography>
                </div>
                <div className="flex-1 relative ml-8">
                    <Carousel className="relative">
                        <CarouselPrevious className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2" />
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="p-8 border rounded-lg shadow-md">
                                    <Typography tag='p' alignment="center">
                                    &quot;{testimonial.clientTestimonial}&quot;
                                    </Typography>
                                    <Typography tag='p' alignment="center" fontWeight='semibold'>
                                        - {testimonial.clientName}
                                    </Typography>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
