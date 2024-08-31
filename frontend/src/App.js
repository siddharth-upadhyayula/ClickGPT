import './App.css';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('image-generator');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <button className={activeTab === 'image-generator' ? 'active':''}
      onClick={() => handleTabChange('image-generator')}>Image Generator</button>

      <button className={activeTab === 'chat' ? 'active':''}
      onClick={() => handleTabChange('chat')}>Chat</button>

      <div>
        {activeTab === 'image-generator' && <ImageComponent/>}
        {activeTab === 'chat' && <ChatComponent/>}
      </div>
    </div>
    
  );
}

export default App;
