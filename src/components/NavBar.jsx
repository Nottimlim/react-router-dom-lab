import { Link } from "react-router-dom";
import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/mailboxes">Mailboxes</Link>
            <Link to="/mailboxes/new">New Mailbox</Link>
        </nav>
    );
};

export default NavBar;