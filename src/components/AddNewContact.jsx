import { contactsAction } from "@/store/contactSlice";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Input from "./ui/Input";

const AddNewContact = () => {
  const { editContact } = useSelector((state) => state.contactsState);

  const nameInputRef = useRef("");
  const emailInputRef = useRef("");
  const phoneInputRef = useRef("");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: editContact?.id || uuidv4(),
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      phone: "+91-" + phoneInputRef.current.value,
      isFavourite: editContact?.isFavourite || false,
    };
    dispatch(contactsAction.addNewContact(newContact));

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    phoneInputRef.current.value = "";
  };

  return (
    <div className="p-4 flex flex-col gap-y-2 items-center">
      <h3 className="font-bold text-neutral-300">Add A New Contact</h3>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-y-2 items-center"
      >
        <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-4 text-slate-900">
          <Input
            ref={nameInputRef}
            defaultValue={editContact?.name}
            type="text"
            placeholder="Name..."
          />
          <Input
            ref={emailInputRef}
            defaultValue={editContact?.email}
            type="email"
            placeholder="Email..."
          />
          <Input
            ref={phoneInputRef}
            defaultValue={editContact?.phone.split("-")[1]}
            type="tel"
            placeholder="Phone..."
          />
        </div>
        <button className="w-full py-1 rounded-md bg-blue-600 font-semibold hover:bg-blue-900 lg:w-3/4">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddNewContact;
