import { contactsAction } from "@/store/contactSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import Button from "./base/element/Button";

import Input from "./base/element/Input";

const inputStyles = "rounded-md px-2 py-1 placeholder-slate-400";
const buttonCreateStyles =
  "w-full py-1 rounded-md bg-blue-600 font-semibold hover:bg-blue-900 lg:w-3/4";

const AddNewContact = () => {
  const { editContact } = useSelector((state) => state.contactsState);

  const nameInputRef = useRef("");
  const emailInputRef = useRef("");
  const phoneInputRef = useRef("");

  useEffect(() => {
    nameInputRef.current.value = editContact.name;
    emailInputRef.current.value = editContact.email;
    phoneInputRef.current.value =
      editContact.phone === "" ? "" : editContact.phone.split("-")[1];
  }, [editContact]);

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !nameInputRef.current.value ||
      !emailInputRef.current.value ||
      !phoneInputRef.current.value
    )
      return toast.error("Please Provide Valid Input", {
        position: "top-center",
      });
    const isNew = !Boolean(editContact.id);
    const newContact = {
      id: editContact.id || uuidv4(),
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      phone: "+91-" + phoneInputRef.current.value,
      isFavourite: editContact.isFavourite || false,
    };
    dispatch(contactsAction.addNewContact(newContact));

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    phoneInputRef.current.value = "";

    toast.success(isNew ? "New Contact Added" : "Contact Updated Successfully");
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
            className={inputStyles}
            ref={nameInputRef}
            type="text"
            placeholder="Name..."
          />
          <Input
            className={inputStyles}
            ref={emailInputRef}
            type="email"
            placeholder="Email..."
          />
          <Input
            className={inputStyles}
            ref={phoneInputRef}
            type="tel"
            placeholder="Phone..."
          />
        </div>
        <Button className={buttonCreateStyles} type="submit">
          Create
        </Button>
      </form>
    </div>
  );
};

export default AddNewContact;
