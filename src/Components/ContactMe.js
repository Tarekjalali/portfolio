"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";

const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Contact Me</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Contact me" />
        <Drawer.Items>
          <h2 className="mb-6 text-sm text-gray-500 dark:text-gray-400">Email :</h2>
          <h5 className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            tarekjalali96@gmail.com
          </h5>
          <h2 className="mb-6 text-sm text-gray-500 dark:text-gray-400">Phone :</h2>
          <h5 className="mb-6 text-sm text-gray-500 dark:text-gray-400">+216 21 203 148</h5>
          <h2 className="mb-6 text-sm text-gray-500 dark:text-gray-400">LinkedIn :</h2>
          <h5 className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/tarek-jalali-10988416a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inherit-styles"
            >
              /in/tarek-jalali
            </a>
          </h5>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default ContactMe;
