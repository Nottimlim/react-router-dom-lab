const MailboxList = ({ mailboxes }) => {
  return (
    <ul>
      {mailboxes.map((mailbox) => (
        <li key={mailbox._id} className="mail-box">
          {mailbox._id} - {mailbox.boxholder} ({mailbox.boxSize})
        </li>
      ))}
    </ul>
  );
};

export default MailboxList;
