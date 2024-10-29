import React, { useState } from "react";
import TabToggle from "./TapToggle";
import ColorSelector from "./ColorSelector"; //임시 컬러선택 컴포넌트//
import ImageSelector from "./ImageSelector"; //임시 이미지 선택 컴포넌트//

const TapContainer = () => {
  const [activeTab, setActivaTab] = useState("컬러");

  const handleTabCange = (tap) => {
    setActivaTab(tap);
  };

  return (
    <div>
      <TapToggle tabs={[`컬러`, `이미지`]} onClick={handleTabCange} />
      <div className="tab-content">
        {activeTab === "컬러" && (
          <ColorSelector onColorSelect={handleColorSelect} />
        )}
        {activeTab === "이미지" && <ImageSelector />}
      </div>
    </div>
  );
};

export default TabContainer;
