import React, { ReactNode } from 'react';

interface TypographyH2Props {
    children: ReactNode;
}

interface TypographyPProps {
    children: ReactNode;
}

export function TypographyH2({ children }: TypographyH2Props) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-center my-8">
            {children}
        </h2>
    );
}

export function TypographyP({ children }: TypographyPProps) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center mx-4">
            {children}
        </p>
    );
}