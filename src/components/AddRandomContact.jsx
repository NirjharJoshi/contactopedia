import { contactsAction } from "@/store/contactSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Button from "./base/element/Button";

const buttonRandomContactStyles =
  "p-1 text-sm font-semibold rounded-lg bg-green-600 md:px-4 md:text-base hover:bg-green-900";

const AddRandomContact = () => {
  const dispatch = useDispatch();

  const handleRandomContact = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];

    dispatch(
      contactsAction.addRandomContact({
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        isFavourite: false,
      })
    );

    toast.success("Random Contact Added");
  };

  return (
    <Button className={buttonRandomContactStyles} onClick={handleRandomContact}>
      Add Random Contact
    </Button>
    // <button
    //   className="p-1 text-sm font-semibold rounded-lg bg-green-600 md:px-4 md:text-base hover:bg-green-900"
    //   onClick={handleRandomContact}
    // >
    //   Add Random Contact
    // </button>
  );
};

export default AddRandomContact;
