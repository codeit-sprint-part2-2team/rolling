import PropTypes from 'prop-types';
import {
  MSHeaderContainer,
  MSHeaderPosition,
  MSHeaderArea,
  ButtonContainer,
} from './MessagesHeader.styles.js';
import { StyledCreatedAt } from './StyledCreatedAt.styles.js';
import Badge from '../../components/Badge/Badge';
import Profile from '../../components/Profile/Profile';
import dateConversion from '../../utils/dateConversion';
import { ReactComponent as DeleteIcon } from '../../assets/icon-delete.svg';
import { ReactComponent as UpdateIcon } from '../../assets/icon-edit.svg';
import EditMessageButton from './EditMessageButton'; // 수정 버튼 컴포넌트 임포트//
import DeleteMessageButton from './DeleteMessageButton'; // 삭제 버튼 컴포넌트 임포트//

MessagesHeader.propTypes = {
  type: PropTypes.string,
  messageData: PropTypes.object,
  onEvent: PropTypes.shape({
    buttonDelete: PropTypes.func,
    buttonEdit: PropTypes.func,
  }),
};

function MessagesHeader({
  type,
  messageData = {},
  onEvent = {
    buttonDelete: () => {},
    buttonEdit: () => {},
  },
}) {
  return (
    <MSHeaderContainer>
      <MSHeaderPosition>
        <Profile imageURL={messageData.profileImageURL} />
        <MSHeaderArea>
          <h3>
            <span>From.</span>
            {messageData.sender}
          </h3>
          <Badge value={messageData.relationship} />
        </MSHeaderArea>
      </MSHeaderPosition>
      {/* 'edit' 타입일 때 수정 및 삭제 아이콘 렌더링 */}
      {type === 'edit' && (
        <ButtonContainer>
          <EditMessageButton id={messageData.id} onEdit={onEvent.buttonEdit}>
            <UpdateIcon /> {/* 수정 아이콘 */}
          </EditMessageButton>
          <DeleteMessageButton
            id={messageData.id}
            onDelete={onEvent.buttonDelete}>
            <DeleteIcon /> {/* 삭제 아이콘 */}
          </DeleteMessageButton>
        </ButtonContainer>
      )}
      {type === 'modal' && (
        <StyledCreatedAt>
          {dateConversion(messageData.createdAt)}
        </StyledCreatedAt>
      )}
    </MSHeaderContainer>
  );
}

export default MessagesHeader;
