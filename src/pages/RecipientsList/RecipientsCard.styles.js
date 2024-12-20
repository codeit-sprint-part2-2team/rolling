import styled, { css } from 'styled-components';

import { font } from '../../styles/common/fonts.styles';
import POLYGON_TRIANGLE from '../../assets/RecipientsList/RecipientsCard/bg-polygon-triangle.svg';
import TotalMessage from '../../components/TotalMessage/TotalMessage';
import { StyledMessageCount } from '../../components/TotalMessage/TotalMessage.styles';

export const StyledTotalMessage = styled(TotalMessage)``;

const colorStyle = {
  green: css`
    width: 33.6rem;
    height: 16.9rem;
    top: 45%;
    right: -70%;
    border-radius: 9.05rem;
  `,
  purple: css`
    width: 33.6rem;
    height: 16.9rem;
    top: 45%;
    right: -70%;
    border-radius: 9.05rem;
  `,
  beige: css`
    width: 33.2rem;
    height: 31.8rem;
    top: 45%;
    right: -70%;
    border-radius: 5.1rem;
  `,
  blue: css`
    width: 30.6rem;
    height: 27.9rem;
    top: 45%;
    right: -40%;
    background: url(${POLYGON_TRIANGLE}) no-repeat center/contain;
    background-color: transparent;
  `,
};

const colorShape = ($bgColor) => colorStyle[$bgColor] ?? '';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 3rem 2.4rem 2rem;
  width: 27.5rem;
  height: 26rem;
  color: ${({ theme }) => theme.text};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.6rem;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  @media (max-width: 767px) {
    width: 20.8rem;
    height: 23.2rem;
  }
  ${({ $bgColor, $bgImage }) => {
    const isImage = $bgImage !== null;
    if (isImage) {
      return css`
        background: url(${$bgImage}) no-repeat center/cover;
        &::before {
          position: absolute;
          content: '';
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.54);
        }
        ${CardArea} {
          h3 {
            color: var(--white);
          }
          ${StyledMessageCount} {
            color: var(--white);
            span {
              color: var(--white);
            }
          }
        }
      `;
    } else {
      return css`
        background-color: var(--${$bgColor}-200, none);
        &::before {
          position: absolute;
          content: '';
          z-index: 1;
          ${({ $bgColor }) => css`
            background-color: var(--${$bgColor}-300, none);
          `}
          ${({ $bgColor }) => colorShape($bgColor)};
        }
      `;
    }
  }}
`;
export const CardArea = styled.div`
  position: relative;
  flex: 1;
  z-index: 2;
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
    margin-bottom: 1.2rem;
    text-overflow: ellipsis;
    ${font['24b']};
    color: var(--gray-900);
    @media (max-width: 767px) {
      ${font['18b']};
    }
  }
`;

export const EmojiArea = styled.div`
  position: relative;
  padding-top: 1.6rem;
  width: 100%;
  height: 5.3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  z-index: 2;
  ul {
    display: flex;
    gap: 0.8rem;
    li {
      display: flex;
    }
    @media screen and (max-width: 768px) {
      gap: 0.4rem;
    }
  }
`;
