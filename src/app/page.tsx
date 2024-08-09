import CallToAction from "@/components/callToAction";
import Features from "@/components/features";
import { IconCarousel } from "@/components/iconCarousel";
import TestimonialSection from "@/components/testimonialSection";
import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { VideoSection } from "@/components/videoSection";
import Image from "next/image";

const iconUrls = [
  "/assets/icon1.jpg",
  "/assets/icon2.jpg",
  "/assets/icon3.jpg",
  "/assets/icon4.jpg",
  "/assets/icon5.jpg"
];

export default function Home() {
  return (
    <>
      <section className="FirstView">
        <TypographyH2>This is the first tittle</TypographyH2>
        <TypographyP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, aut obcaecati tempora, dicta vitae, atque sequi voluptas non praesentium labore iste officiis! Adipisci asperiores magnam a consequatur blanditiis, velit ducimus.</TypographyP>
        <div className="flex justify-center my-8">
          <Image src="/assets/computer.png" alt="Computer" width={400} height={200} className="object-contain" />
        </div>
        <CallToAction></CallToAction>
        <TypographyH2>This paragraph belongs to the icon carousel</TypographyH2>
        <TypographyP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium possimus reiciendis est fuga amet? Ipsum quas exercitationem, accusamus atque vel, quis porro iusto, consequatur ut dolores illum voluptas. Accusamus!</TypographyP>
        <IconCarousel icons={iconUrls}></IconCarousel>
      </section>
      <section className="SecondView">
        <section className="VideoSection">
          <TypographyH2>This is the second tittle</TypographyH2>
          <TypographyP>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, officia hic excepturi, minima assumenda unde est suscipit iure quis enim similique! Porro libero illum architecto expedita vel blanditiis corporis nesciunt.</TypographyP>
          <VideoSection></VideoSection>
        </section>
        <section className="CardFeatures">
          <TypographyH2>This is the third tittle</TypographyH2>
          <TypographyP>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla recusandae error porro aliquam deserunt quasi voluptatibus quo, odit id tempore quisquam in dolorem accusantium odio ullam voluptates fugit neque soluta.</TypographyP>
          <Features></Features>
        </section>
      </section>
      <section className="ThirdView">
        <section className="Testimonials">
          <TestimonialSection></TestimonialSection>
        </section>
      </section>
    </>
  );
}