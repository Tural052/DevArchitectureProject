import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import profile from './assets/profile.png';
import 'react-chat-widget/lib/styles.css';
const ReactChat = () => {
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    setTimeout(() => {
      addResponseMessage('Size nece komek ede bilerik ?');
    }, 2000);
  };

  useEffect(() => {
    addResponseMessage('Salam TWC xoş gəlmisiniz yardıma ehtiyacınız varsa TWC chat komandası dəstək üçün buradadır');
  }, []);
  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        emojis
        avatar={profile}
        showBadge
        resizable
        showTimeStamp
        launcherOpenLabel
        launcherCloseLabel
        autofocus
        senderPlaceHolder="Mesaj mətnini daxil edin"
        title="TWC xoş gəlmisiniz"
        subtitle="TWC chat burada"
      />
    </div>
  );
};

export default ReactChat;
