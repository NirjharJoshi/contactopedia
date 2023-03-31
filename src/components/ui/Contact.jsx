import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { contactsAction } from "../../store/contactSlice";
import Button from "../base/element/Button";

const buttonIsFavouriteStyles = "p-1 rounded-md bg-yellow-400 text-slate-950";
const buttonIsGeneralStyles =
  "p-1 rounded-md text-yellow-400 bg-slate-950 border border-yellow-400";
const buttonEditStyles = "my-1 p-1 rounded-md bg-blue-600";
const buttonDeleteStyles = "p-1 rounded-md bg-red-600";

const Contact = ({ id, name, email, phone, isFavourite }) => {
  const dispatch = useDispatch();

  const handleToggeleFavourite = (id) => {
    dispatch(contactsAction.handleFavorite(id));
  };
  const handleEditContact = (id) => {
    window.scrollTo(0, 0);
    dispatch(contactsAction.handleEditContact(id));
  };
  const handleDeleteContact = (id) => {
    dispatch(contactsAction.handleDeleteContact(id));
    toast.success("Contact Deleted");
  };

  const conditionalStyle = isFavourite
    ? buttonIsFavouriteStyles
    : buttonIsGeneralStyles;

  return (
    <div
      id={id}
      className="mb-2 p-2 flex flex-row items-center gap-x-2 border border-slate-100 rounded-xl md:gap-x-4"
    >
      <div className="flex h-10">
        <Image
          loader={({ src }) =>
            `https://ui-avatars.com/api/?name=${encodeURIComponent(src)}`
          }
          src={name}
          alt={`${name} image`}
          width={50}
          height={50}
        />
      </div>
      <div className="w-3/4">
        <h3 className="text-lg font-bold text-yellow-400">{name}</h3>
        <h5 className="text-sm text-slate-100">{email}</h5>
        <h5 className="text-sm text-slate-100">{phone}</h5>
      </div>
      <div className="flex flex-col text-xs">
        <Button
          className={conditionalStyle}
          onClick={handleToggeleFavourite.bind(null, id)}
        >
          <i className="fa-regular fa-star"></i>
        </Button>
        <Button
          className={buttonEditStyles}
          onClick={handleEditContact.bind(null, id)}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </Button>
        <Button
          className={buttonDeleteStyles}
          onClick={handleDeleteContact.bind(null, id)}
        >
          <i className="fa-regular fa-trash-can"></i>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
