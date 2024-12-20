import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { font } from '../../styles/common/fonts.styles';

// Toast 스타일 컴포넌트
export const StyledToastContainer = styled(ToastContainer)`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    margin: 0;
    padding: 0;
    .Toastify__toast {
      width: 32.75rem;
      max-width: 32.75rem; // 524px로 고정
      height: 4rem;
      padding: 1.1875rem 1.875rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.text};
      opacity: 1;
    }

    .Toastify__toast-body {
      padding: 0;
      text-align: left;
    }
    .Toastify__close-button {
      display: none; // 기본 닫기 버튼 숨기기
    }
  }
`;

export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  background: transparent;
  overflow: hidden;
  justify-content: center;
`;

export const ToastMessage = styled.div`
  ${font['16']};
  color: ${({ theme }) => theme.whiteText};
  overflow-wrap: break-word;
  white-space: normal;
  flex-grow: 1;
  margin: 0 1rem;
  border-radius: 0.5rem;
`;
