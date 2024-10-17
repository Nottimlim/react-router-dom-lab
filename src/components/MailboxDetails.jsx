import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  const selectedLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div>
      <h1>Mailbox Details</h1>
      <p>Box Number: {selectedBox._id}</p>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
      <h3>Letters:</h3>
      <ul>
        {selectedLetters.map((letter, index) => (
          <li key={index}>
            <strong>To:</strong> {letter.recipient} <br />
            <strong>Message:</strong> {letter.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxDetails;
