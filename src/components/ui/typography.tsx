interface TypographyProps {
    children: React.ReactNode;
    alignment?: "left" | "center" | "right";
  }
  
  export function TypographyH2({ children, alignment = "center" }: TypographyProps) {
    return (
      <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-${alignment} my-8 mx-auto max-w-screen-lg`}>
        {children}
      </h2>
    );
  }
  
  export function TypographyP({ children, alignment = "center" }: TypographyProps) {
    return (
      <p className={`leading-7 [&:not(:first-child)]:mt-6 text-${alignment} mx-auto max-w-screen-lg`}>
        {children}
      </p>
    );
  }
  