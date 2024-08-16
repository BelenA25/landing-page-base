import Typography from "@/components/Typography/typography";

export default function loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            <Typography tag="p">Loading...</Typography>
        </div>
    )
}