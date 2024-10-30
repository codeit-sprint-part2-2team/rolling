import PropTypes from 'prop-types';

import { EmojiBadgeArea, Emoji, Count } from './EmojiBadge.styles';

function EmojiBadge({ emoji, count }) {
  return (
    <EmojiBadgeArea>
      <EmojiContainer>
        <Emoji>{emoji}</Emoji>
      </EmojiContainer>
      <Count>{count}</Count>
    </EmojiBadgeArea>
  );
}

EmojiBadge.propTypes = {
  emoji: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default EmojiBadge;
