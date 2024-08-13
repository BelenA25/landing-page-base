import { createClient } from "@/utils/supabase/server";

export default async function Option({ params }: { params: { optionId: string } }) {
    const supabase = createClient();
    
    const { data: productData, error } = await supabase
        .from('Product')
        .select('name, description, image_link') 
        .eq('id', params.optionId)
        .single();

    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    if (!productData) {
        return <div>No product found with this ID.</div>;
    }

    return (
        <div className="p-6 max-w-screen-md mx-auto">
            <img src={productData.image_link}className="w-full h-auto" />
            <h1 className="text-2xl font-bold mt-4">{productData.name}</h1>
            <p className="mt-2">{productData.description}</p>
        </div>
    );
}
