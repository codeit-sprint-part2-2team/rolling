import styled, { css } from 'styled-components';

const ellipsisStyle = css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const MSHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const MSHeaderPosition = styled.div`
  display: flex;
  flex: 1;
`;
export const MSHeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    ${ellipsisStyle}
    margin-bottom: 0.6rem;
    width: 90%;
    ${({ theme }) => theme.fontTheme['20Bold']}
    span {
      margin-right: 0.6rem;
      ${({ theme }) => theme.fontTheme['20Regular']}
    }
  }

  @media screen and (max-width: 767px) {
    h3 {
      ${({ theme }) => theme.fontTheme['18Bold']}
      span {
        margin-right: 0.6rem;
        ${({ theme }) => theme.fontTheme['18Regular']}
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;