import { contactsAction } from "@/store/contactSlice";
import React from "react";
import { useDispatch } from "react-redux";

const RemoveAllContacts = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="p-1 text-sm font-semibold rounded-lg bg-red-600 md:px-4 md:text-base hover:bg-red-900"
      onClick={() => dispatch(contactsAction.handleRemoveAllContact())}
    >
      Remove All Contacts
    </button>
  );
};

export default RemoveAllContacts;
