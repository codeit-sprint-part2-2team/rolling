// src/components/Emoji/EmojiPicker.jsx
import React, { useState } from 'react';
import Picker from 'emoji-picker-react'; // emoji-picker-react에서 Picker 임포트

import EmojiBadge from '../components/Badge/EmojiBadge';

function EmojiPickerComponent() {
  // 함수 선언 형식으로 변경
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [emojiCount, setEmojiCount] = useState(0);

  const onEmojiClick = (emojiObject) => {
    setSelectedEmoji(emojiObject.emoji); // 선택한 이모지 설정
    setEmojiCount((prevCount) => prevCount + 1); // 클릭 수 증가
  };

  return (
    <div>
      <Picker onEmojiClick={onEmojiClick} /> {/* 변경된 Picker 컴포넌트 사용 */}
      {selectedEmoji && <EmojiBadge emoji={selectedEmoji} count={emojiCount} />}
    </div>
  );
}

export default EmojiPickerComponent;
