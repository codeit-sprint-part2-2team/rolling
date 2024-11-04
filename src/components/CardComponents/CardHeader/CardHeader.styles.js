import styled from 'styled-components';
import Line from '../../Shared/Line/Line';
import { media } from '../../../styles/common/media.styles.js';

export const CardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2.8rem 0 1.6rem;
`;

export const CardHeaderPosition = styled.div`
  display: flex;
  flex: 1;
  gap: 1.4rem;
  ${media.mobile`
    ${({ $type }) => $type === 'modal' && 'gap: 0.8rem'}
  `}
`;

export const CardHeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
