import styled from 'styled-components';

const directionStyles = {
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: '0 0 0 1.1rem',
    border: '0.1rem solid #E3E3E3',
  },
  column: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: '1.2rem 0 0 0',
    border: 'none',
  },
};

const AvatarGroupStyle = {
  '--Avatar-size': '2.8rem',
  '--Avatar-ringSize': '0.1rem',
};

const avatarStyle = (direction) => ({
  border: directionStyles[direction].border,
  boxShadow: 'none',
  background: '#fff',
  fontSize: '1.2rem',
  fontWeight: '500',
  color: '#484848',
});

const StyledTotalMessage = styled.div`
  display: inline-flex;
  align-items: ${({ direction }) => directionStyles[direction].alignItems};
  flex-direction: ${({ direction }) =>
    directionStyles[direction].flexDirection};
`;

const StyledMessageCount = styled.p`
  margin: ${({ direction }) => directionStyles[direction].margin};
  ${({ theme }) => theme.fontTheme['18Regular']};
  color: ${({ theme }) => theme.colorTheme.grayscale[700]};

  span {
    ${({ theme }) => theme.fontTheme['18Bold']};
  }
`;

export {
  StyledTotalMessage,
  AvatarGroupStyle,
  avatarStyle,
  StyledMessageCount,
};