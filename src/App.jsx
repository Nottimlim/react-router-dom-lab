// src/App.jsx
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import LetterForm from './components/LetterForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (formData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      ...formData,
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  const addLetter = (formData) => {
    setLetters([...letters, formData]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
      </Routes>
    </Router>
  );
};

export default App;
