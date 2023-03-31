import React from "react";
import { useSelector } from "react-redux";
import Contact from "./ui/Contact";

const GeneralContacts = () => {
  const { contacts } = useSelector((state) => state.contactsState);
  const list = contacts
    .filter((contact) => !contact.isFavourite)
    .map((contact) => (
      <Contact
        key={contact.id}
        id={contact.id}
        name={contact.name}
        email={contact.email}
        phone={contact.phone}
        isFavourite={contact.isFavourite}
      />
    ));

  return (
    <div className="my-2 px-4 flex flex-col items-center gap-y-4">
      <h3 className="font-bold text-neutral-300">General Contacts</h3>
      <div className="lg:flex lg:flex-row lg:flex-wrap lg:gap-4 lg:justify-center lg:flex-grow">
        {list}
      </div>
    </div>
  );
};

export default GeneralContacts;
