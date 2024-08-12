import { Button } from "@/components/ui/button";
import Typography from "./Typography/typography";

export default function CallToAction() {
    return (
        <div className="border p-6 rounded-lg max-w-screen-lg mx-auto">
            <Typography tag="h2">What do you need?</Typography>
            <div className="grid grid-cols-2 gap-4 mt-6">
                <Button variant="outline">Option 1</Button>
                <Button variant="outline">Option 2</Button>
                <Button variant="outline">Option 3</Button>
                <Button variant="outline">Option 4</Button>
                <Button variant="outline">Option 5</Button>
                <Button variant="outline">Option 6</Button>
            </div>
            <div className="flex justify-center items-center">
                <Button className="mt-4 flex justify-center items-center" variant="default">Action button</Button>
            </div>
        </div>

    );
}