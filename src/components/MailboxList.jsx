import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h1>Mailbox List</h1>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>
              {mailbox._id} - {mailbox.boxholder} ({mailbox.boxSize})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxList;