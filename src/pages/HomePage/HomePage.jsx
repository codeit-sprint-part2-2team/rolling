import React from 'react';
import EmojiPickerComponent from '../../Emoji/EmojiPicker'; // 올바른 경로로 임포트

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <EmojiPickerComponent /> {/* EmojiPickerComponent를 여기에서 사용 */}
    </div>
  );
}

export default HomePage;
