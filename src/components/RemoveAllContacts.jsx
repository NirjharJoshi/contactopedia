import { contactsAction } from "@/store/contactSlice";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "./base/element/Button";

const buttonRemoveAllContactsStyles =
  "p-1 text-sm font-semibold rounded-lg bg-red-600 md:px-4 md:text-base hover:bg-red-900";

const RemoveAllContacts = () => {
  const dispatch = useDispatch();

  const handleRemoveAllContacts = () => {
    dispatch(contactsAction.handleRemoveAllContact());
  };

  return (
    <Button
      className={buttonRemoveAllContactsStyles}
      onClick={handleRemoveAllContacts}
    >
      Remove All Contacts
    </Button>
  );
};

export default RemoveAllContacts;
