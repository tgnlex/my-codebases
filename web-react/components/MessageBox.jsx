import { useState } from 'react';

export default function MessageBox() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi');
  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        />
    </form>
  );
} 

function sendMessage(message) {
    // ...
}