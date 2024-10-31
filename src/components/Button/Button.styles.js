import styled, { css } from 'styled-components';

import { colorStyles } from '../../styles/colorStyles';
import { fontStyles } from '../../styles/fontStyles';

const sizes = {
  s: css`
    padding: 13px 20px;
    border-radius: 6px;
    ${fontStyles[16]}
  `,
  m: css`
    width: 12rem;
    height: 4rem;
    border-radius: 6px;
    ${fontStyles[16]}
  `,
  l: css`
    width: 28rem;
    height: 5.6rem;
    border-radius: 12px;
    ${fontStyles['18b']};
  `,
  xl: css`
    width: 100%;
    height: 5.6rem;
    border-radius: 12px;
    ${fontStyles['18b']};
  `,
};

const colors = {
  primary: css`
    border: none;
    background-color: ${colorStyles.purple[600]};
    color: ${({ theme }) => theme.whiteText};

    &:hover {
      background-color: ${colorStyles.purple[700]};
    }
    &:active,
    &:focus:active {
      background-color: ${colorStyles.purple[800]};
    }
    &:focus {
      background-color: ${colorStyles.purple[800]};
      outline: none;
    }
    &:disabled {
      background-color: ${({ theme }) => theme.border};
      cursor: not-allowed;
    }
  `,
  secondary: css`
    border: 1px solid ${colorStyles.purple[600]};
    background-color: ${({ theme }) => theme.background};
    color: ${colorStyles.purple[700]};

    &:hover {
      border-color: ${colorStyles.purple[700]};
      background-color: #f7f0ff;
      color: ${colorStyles.purple[600]};
    }
    &:active,
    &:focus:active {
      border-color: ${colorStyles.purple[800]};
      background-color: #f7f0ff;
      color: ${colorStyles.purple[600]};
    }
    &:focus {
      border-color: ${colorStyles.purple[800]};
      background-color: ${({ theme }) => theme.background};
      color: #9747ff;
      outline: none;
    }
    &:disabled {
      border: none;
      background-color: ${({ theme }) => theme.border};
      color: ${({ theme }) => theme.whiteText};
      cursor: not-allowed;
    }
  `,
};

export const StButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;

  ${({ size }) => sizes[size]}
  ${({ color }) => colors[color]}
`;
