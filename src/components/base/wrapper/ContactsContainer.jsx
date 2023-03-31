import React from "react";

const ContactsContainer = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="my-2 py-2 px-4 flex flex-col items-center gap-y-4">
        {children}
      </div>
    </div>
  );
};

export default ContactsContainer;
