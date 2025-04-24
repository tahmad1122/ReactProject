import React from 'react';
import '../components/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className=''> © {new Date().getFullYear()} My To-Do List | All rights reserved.</p>
    </footer>
  );
}

export default Footer; 
