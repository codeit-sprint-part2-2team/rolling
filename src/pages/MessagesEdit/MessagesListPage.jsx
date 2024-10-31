import { useEffect, useState } from 'react';
import { getMessagesList } from '../../service/api';
import MessageCardList from './MessageCardList';
import StyledModal from '../../components/Modal/StyledModal';

function MessagesListPage() {
  const [messageData, setMessageData] = useState([]);
  const [hasModalOpen, setHasModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleMessageClick = (id) => {
    const cardData = messageData.find((card) => card.id === id);
    setSelectedCard(cardData);
    setHasModalOpen(true);
  };

  const handleCloseModal = () => {
    setHasModalOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const res = await getMessagesList('9117');
        const { results } = res;
        setMessageData(results);
      } catch (error) {
        console.error('메시지 리스트를 불러오는 중 오류 발생:', error);
      }
    };

    handleLoad();
  }, []);

  const handleEditMessage = (id) => {
    // 수정 페이지로 이동하는 로직 (React Router 사용)
    navigate(`/edit/${id}`);
  };

  const handleDeleteMessage = async (id) => {
    try {
      await deleteMessage(id); // API를 통해 메시지 삭제
      setMessageData((prev) => prev.filter((message) => message.id !== id)); // 상태 업데이트
    } catch (error) {
      console.error('메시지 삭제 중 오류 발생:', error);
    }
  };

  return (
    <>
      <MessageCardList
        type="card"
        messageData={messageData}
        onEvent={{ modal: handleMessageClick }}
        onDelete={handleDeleteMessage} // 삭제 핸들러 전달
        onEdit={handleEditMessage} // 수정 핸들러 전달
      />
      {hasModalOpen && (
        <StyledModal
          isOpen={hasModalOpen}
          onRequestClose={handleCloseModal}
          messageData={selectedCard}
          onEvent={{ close: handleCloseModal }}
        />
      )}
    </>
  );
}

export default MessagesListPage;
