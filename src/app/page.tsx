import { TypographyH2, TypographyP } from "@/components/typography";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TypographyH2>This is the first tittle</TypographyH2>
      <TypographyP>This is a paragraph</TypographyP>
      <div className="flex justify-center my-8">
        <Image src="/assets/computer.png" alt="Computer" width={400} height={200} className="object-contain" />
      </div>
    </>
  );
}