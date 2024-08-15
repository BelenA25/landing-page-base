import Typography from "@/components/Typography/typography";
import { createClient } from "@/utils/supabase/server";
import Head from "next/head";
import Image from "next/image";

export default async function Option({ params }: { params: { optionId: string } }) {
    const supabase = createClient();

    const { data: productData, error } = await supabase
        .from('Product')
        .select('name, description, image_link')
        .eq('id', params.optionId)
        .single();

    if (error) {
        return <Typography tag="p">Error loading data: {error.message}</Typography>;
    }

    if (!productData) {
        return <Typography tag="p">No product found with this ID.</Typography>;
    }

    return (
        <>
            <Head>
                <title>{productData.name}</title>
                <meta property="og:title" content={productData.name} />
                <meta property="og:description" content={productData.description} />
                <meta property="og:image" content={productData.image_link} />
            </Head>
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
