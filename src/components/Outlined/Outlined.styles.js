import styled, { css } from 'styled-components';

import { fontStyles } from '../../styles/fontStyles';

const OutlinedStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: auto;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  ${fontStyles[16]};
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.surface};
  }
  &:active,
  &:focus:active {
    background-color: ${({ theme }) => theme.surface};
    border-color: ${({ theme }) => theme.border};
  }
  &:focus {
    border-color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.background};
    outline: none;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.whiteText};
    cursor: not-allowed;

    svg {
      fill: ${({ theme }) => theme.background};
    }
  }
`;

const sizeStyles = {
  s: css`
    padding: 6px 6px;
  `,
  m: css`
    padding: 7px 16px;
  `,
};

export const StOutlined = styled.button`
  ${({ $size }) => sizeStyles[$size]}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ $iconPosition }) =>
    $iconPosition === 'right' ? 'row-reverse' : 'row'};

  ${OutlinedStyles}
`;

export const IconArea = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.4rem;
  min-height: 2.4rem;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Text = styled.span`
  ${fontStyles[16]};
`;
