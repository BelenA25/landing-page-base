"use client";

import { ReactNode, CSSProperties } from 'react';
import * as S from './styled';

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TypographyProps {
    tag?: TagVariants;
    children: ReactNode;
    alignment?: CSSProperties['textAlign'];
    fontWeight?: "normal" | "semibold" | "bold";
}

const Typography = ({
    tag = 'p',
    children,
    alignment = 'center',
    fontWeight = 'normal',
}: TypographyProps) => {
    const dynamicStyles = {
        textAlign: alignment,
        fontWeight: fontWeight === 'semibold' ? 600 : fontWeight === 'bold' ? 700 : 400,
        marginTop: alignment === 'center' ? '2rem' : '1rem',
        marginBottom: '1rem',
        maxWidth: '80%',
        marginLeft: alignment === 'center' ? 'auto' : undefined,
        marginRight: alignment === 'center' ? 'auto' : undefined
    };

    return (
        <S.DynamicTypography tag={tag} style={dynamicStyles} className="max-w-screen-lg">
            {children}
        </S.DynamicTypography>
    );
};

export default Typography;