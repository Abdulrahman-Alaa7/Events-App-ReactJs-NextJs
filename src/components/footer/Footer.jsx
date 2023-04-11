import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p className="footer-info">
          &copy; {new Date().getFullYear()} Abdulrahman - Events App
        </p>
      </footer>
    </>
  );
};

export default Footer;
