import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <div>
      <h1>Send New Letter</h1>
      <form onSubmit={handleSubmit}>
        <select value={mailboxId} onChange={(e) => setMailboxId(e.target.value)} required>
          <option value="" disabled>Select a mailbox</option>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              {mailbox._id} - {mailbox.boxholder}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Recipient Name"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Letter</button>
      </form>
    </div>
  );
};

export default LetterForm;