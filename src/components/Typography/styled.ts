import { createElement, ReactNode, ElementType } from 'react';
import styled, { css } from 'styled-components';

interface DynamicTypographyProps {
  tag: ElementType;
  children: ReactNode;
  [key: string]: any;
}

export const DynamicTypography = styled(({ tag, children, ...props }: DynamicTypographyProps) =>
  createElement(tag, props, children),
)`
  ${({ tag }) => {
    switch (tag) {
      case 'h1':
        return css`
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        `;
      case 'h2':
        return css`
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.25rem;
        `;
      case 'h3':
        return css`
          font-size: 1.75rem;
          font-weight: bold;
          margin-bottom: 1rem;
        `;
      case 'h4':
        return css`
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.75rem;
        `;
      case 'h5':
        return css`
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        `;
      case 'h6':
        return css`
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 0.25rem;
        `;
      case 'p':
        return css`
          font-size: 1rem;
          font-weight: normal;
          margin-bottom: 1rem;
        `;
      case 'span':
        return css`
          font-size: 0.875rem;
          font-weight: normal;
        `;
      default:
        return css`
          font-size: 1rem;
          font-weight: normal;
        `;
    }
  }}
`;
