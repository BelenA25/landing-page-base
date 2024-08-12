import CallToAction from "@/components/callToAction";
import Features from "@/components/features";
import { IconCarousel } from "@/components/iconCarousel";
import TestimonialSection from "@/components/testimonialSection";
import { VideoSection } from "@/components/videoSection";
import Image from "next/image";
import { createClient } from '@/utils/supabase/server';
import TableSection from "@/components/tableSection";
import Typography from "@/components/Typography/typography";



const iconUrls = [
  "/assets/icon1.jpg",
  "/assets/icon2.jpg",
  "/assets/icon3.jpg",
  "/assets/icon4.jpg",
  "/assets/icon5.jpg"
];

export default async function Home() {
  const supabase = createClient();
  const { data: Testimonials } = await supabase.from("Testimonial").select();

  return (
    <>
      <section className="FirstView">
        <Typography tag="h2" fontWeight="bold">This is the first tittle</Typography>
        <Typography tag="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, aut obcaecati tempora, dicta vitae, atque sequi voluptas non praesentium labore iste officiis! Adipisci asperiores magnam a consequatur blanditiis, velit ducimus.</Typography>
        <div className="flex justify-center my-4">
          <Image src="/assets/computer.png" alt="Computer" width={400} height={100} className="object-contain" />
        </div>
        <CallToAction></CallToAction>
        <Typography tag="h2" fontWeight="bold">This title belongs to the icon carousel</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium possimus reiciendis est fuga amet? Ipsum quas exercitationem, accusamus atque vel, quis porro iusto, consequatur ut dolores illum voluptas. Accusamus!</Typography>
        <IconCarousel icons={iconUrls}></IconCarousel>
      </section>
      <section className="SecondView">
        <section className="VideoSection">
          <Typography tag="h2" fontWeight="bold">This is the second tittle</Typography>
          <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, officia hic excepturi, minima assumenda unde est suscipit iure quis enim similique! Porro libero illum architecto expedita vel blanditiis corporis nesciunt.</Typography>
          <VideoSection></VideoSection>
        </section>
        <section className="CardFeatures">
          <Typography tag="h2" fontWeight="bold">This is the card features section</Typography>
          <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla recusandae error porro aliquam deserunt quasi voluptatibus quo, odit id tempore quisquam in dolorem accusantium odio ullam voluptates fugit neque soluta.</Typography>
          <Features></Features>
        </section>
      </section>
      <section className="ThirdView">
        <section className="Testimonials">
          <TestimonialSection></TestimonialSection>
        </section>
      </section>
      <section className="FourthView">
        <TableSection></TableSection>
      </section>
    </>
  );
}