import CallToAction from "@/components/callToAction";
import Features from "@/components/features";
import { IconCarousel } from "@/components/iconCarousel";
import TestimonialSection from "@/components/testimonialSection";
import { VideoSection } from "@/components/videoSection";
import Image from "next/image";
import TableSection from "@/components/tableSection";
import Typography from "@/components/Typography/typography";
import { Metadata } from "next";
import { ContactForm } from "@/components/formSection";

const iconUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/220px-2021_Facebook_icon.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/640px-Facebook_Messenger_logo_2020.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png",
  "https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_640.png",
  "https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      title: "Landing page base",
      description: "This is a landing page base description.",
      images: [
        {
          url: "https://i.imghippo.com/files/Ej8Ot1723754871.png",
          width: 800,
          height: 600,
          alt: "Image",
        },
      ],
      type: "website",
    },
  };
}
export default async function Home() {

  return (
    <>
      <section className="FirstView">
        <Typography tag="h2" fontWeight="bold">This is the first tittle</Typography>
        <Typography tag="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, aut obcaecati tempora, dicta vitae, atque sequi voluptas non praesentium labore iste officiis! Adipisci asperiores magnam a consequatur blanditiis, velit ducimus.</Typography>
        <div className="flex justify-center my-4">
          <Image src="https://freesvg.org/img/metalmarious_Laptop.png" alt="Computer" width={400} height={100} className="object-contain" />
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
      <section className="ContactForm">
        <Typography tag="h2">Contact with us</Typography>
        <ContactForm></ContactForm>
      </section>
    </>
  );
}