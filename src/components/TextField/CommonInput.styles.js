//NOTE - input의 경우 사용자의 동작에 따라 다양한 css 이벤트들이 발생하는데, 이를 효율적으로 관리하기 위한 파일입니다.
// hover, focus, active, error, errorMessage 등

import { css } from 'styled-components';

export const StyledInput = css`
  padding: 12px 16px;
  
  //border
  border-radius: 8px;
  border: 1px solid
    ${({ $error, theme }) => ($error ? theme.colorTheme.error : '#CCCCCC')};

  //font
  ${({ theme }) => theme.fontTheme['16Regular']}

  //color
  color: ${({ theme }) => theme.colorTheme.grayscale['500']};
  background-color: ${({ theme }) => theme.colorTheme.white};

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colorTheme.grayscale['500']};
    color: ${({ theme }) => theme.colorTheme.grayscale['900']};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.colorTheme.grayscale['700']};
    color: ${({ theme }) => theme.colorTheme.grayscale['900']};
  }

  //focus, disabled 상태일 때는 hover하지 않기
  &:not(:focus, :disabled):hover {
    border: 1px solid ${({ theme }) => theme.colorTheme.grayscale['500']};
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.colorTheme.grayscale['300']};
    background-color: ${({ theme }) => theme.colorTheme.grayscale['100']};
  }
`;

export const StyledErrMessage = css`
  color: ${({ theme }) => theme.colorTheme.error};
  opacity: ${({ $error }) => ($error ? 1 : 0)};
  transition: opacity 0.3s ease;

  ${({ theme }) => theme.fontTheme['12Regular']};
`;
