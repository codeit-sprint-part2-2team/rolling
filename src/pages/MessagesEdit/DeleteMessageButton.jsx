import React from 'react';
import PropTypes from 'prop-types';

const DeleteMessageButton = ({ id, onDelete, children }) => {
  const handleDeleteClick = (event) => {
    event.stopPropagation(); // 클릭 이벤트 전파 방지//
    onDelete(id); // 삭제 이벤트 호출//
  };

  return (
    <button onClick={handleDeleteClick}>
      {children} {/* 아이콘을 children으로 받아서 렌더링 */}
    </button>
  );
};

DeleteMessageButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.node, // 아이콘을 children으로 받음//
};

export default DeleteMessageButton;
