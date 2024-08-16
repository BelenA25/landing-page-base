import Typography from "@/components/Typography/typography";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { Metadata } from "next";

interface Product {
    name: string;
    description: string;
    image_link: string;
}

async function products(optionId: string): Promise<Product> {
    const supabase = createClient();

    const { data: productData, error } = await supabase
        .from('Product')
        .select('name, description, image_link')
        .eq('id', optionId)
        .single();

    if (error || !productData) {
        throw new Error(error?.message || "Product not found");
    }

    return productData as Product;
}

export async function generateMetadata({ params }: { params: { optionId: string } }): Promise<Metadata> {
    const productData = await products(params.optionId);
    return {
        openGraph: {
            title: productData.name,
            description: productData.description,
            images: [
                {
                    url: productData.image_link,
                    width: 800,
                    height: 600
                },
            ],
            type: "website",
        },
    };
}

export default async function Option({ params }: { params: { optionId: string } }) {
    const productData = await products(params.optionId);

    return (
        <>
            <div className="p-6 max-w-screen-md mx-auto">
                <div className="flex justify-center items-center mx-5 my-5">
                    <Image width={400} height={200} src={productData.image_link} alt={""} className="" />
                </div>
                <Typography tag="h1">{productData.name}</Typography>
                <Typography tag="p">{productData.description}</Typography>
            </div>
        </>
    );
}