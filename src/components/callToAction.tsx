import { Button } from "@/components/ui/button";
import Typography from "./Typography/typography";
import Link from 'next/link';
import { createClient } from "@/utils/supabase/server";

export default async function CallToAction() {
    const supabase = createClient();

    const { data: products, error } = await supabase
        .from('Product')
        .select('id, name');

    if (error) {
        return <Typography tag="p">Error loading data: {error.message}</Typography>;
    }

    if (!products) {
        return <Typography tag="p">No products found</Typography>;
    }

    return (
        <div className="border p-6 rounded-lg max-w-screen-lg mx-auto">
            <Typography tag="h2">What do you need?</Typography>
            <div className="grid grid-cols-2 gap-4 mt-6">
                {products.map((product) => (
                    <Link key={product.id} href={`/option/${product.id}`} passHref>
                        <Button variant="outline" className="w-full">{product.name}</Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}