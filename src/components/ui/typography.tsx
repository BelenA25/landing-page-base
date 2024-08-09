interface TypographyProps {
    children: React.ReactNode;
    alignment?: "left" | "center" | "right";
    fontWeight?: "normal" | "semibold" | "bold";
}

export function TypographyH2({ children, alignment = "center" }: TypographyProps) {
    return (
        <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-${alignment} my-8 mx-auto max-w-screen-lg`}>
            {children}
        </h2>
    );
}

export function TypographyP({ children, alignment = "center", fontWeight = "normal" }: TypographyProps) {
    return (
        <p className={`leading-7 [&:not(:first-child)]:mt-6 text-${alignment} font-${fontWeight} mx-auto max-w-screen-lg`}>
            {children}
        </p>
    );
}