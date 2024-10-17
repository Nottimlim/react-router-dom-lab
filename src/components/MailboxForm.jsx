import React from 'react';

const MailboxForm = ({ addBox }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission goes here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Boxholder Name" required />
      <select>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
