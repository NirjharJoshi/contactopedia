import React from "react";
import Input from "./ui/Input";

const AddNewContact = () => {
  return (
    <div className="p-4 flex flex-col gap-y-2 items-center">
      <h3 className="font-bold text-neutral-300">Add A New Contact</h3>
      <form className="flex flex-col gap-y-2 items-center">
        <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-4">
          <Input type="text" placeholder="Name..." />
          <Input type="email" placeholder="Email..." />
          <Input type="tel" placeholder="Phone..." />
        </div>
        <button className="w-full py-1 rounded-md bg-blue-600 font-semibold hover:bg-blue-900 lg:w-3/4">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddNewContact;
