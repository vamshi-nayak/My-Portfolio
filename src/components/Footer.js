import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-gray-100 dark:bg-dark dark:text-light border-1 border-solid dark:border-light">
      <p className="m-0 text-sm sm:text-xs">
        {new Date().getFullYear()} &copy; All Rights Reserved.
      </p>
      <p className="m-0 text-sm sm:text-xs">
        Developed By vamshinayak
        <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
      </p>
    </footer>
  );
};

export default Footer;
