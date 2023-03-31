const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  contacts: [
    {
      id: "81be7f5b-9f3e-4816-a15d-861a0350c24b",
      name: "Priyanka Mehta",
      phone: "+91-9876543210",
      email: "priyanka.mehta@example.com",
      isFavourite: false,
    },
    {
      id: "3ec822d3-51c7-4449-b1e2-2c6af1f6d2c6",
      name: "Akash Patel",
      phone: "+91-8765432109",
      email: "akash.patel@example.com",
      isFavourite: true,
    },
    {
      id: "50cb6abf-452c-42b7-a81c-9e6de1d57f6b",
      name: "Vidya Gupta",
      phone: "+91-7654321098",
      email: "vidya.gupta@example.com",
      isFavourite: false,
    },
    {
      id: "d29c4610-8e3d-447c-aef7-6e9c5592f2b1",
      name: "Anmol Singh",
      phone: "+91-6543210987",
      email: "anmol.singh@example.com",
      isFavourite: true,
    },
    {
      id: "c6d3572d-876c-460a-a6f9-e6d11af6e9b6",
      name: "Neha Shah",
      phone: "+91-5432109876",
      email: "neha.shah@example.com",
      isFavourite: true,
    },
    {
      id: "1e73f875-227d-4d32-8366-8ca20eae18c2",
      name: "Manish Kumar",
      phone: "+91-4321098765",
      email: "manish.kumar@example.com",
      isFavourite: false,
    },
    {
      id: "e22c9f78-36b6-4e4f-b0a1-cb31a2b2f09b",
      name: "Shreya Mishra",
      phone: "+91-3210987654",
      email: "shreya.mishra@example.com",
      isFavourite: true,
    },
    {
      id: "1d5f5c5f-b3bb-4d4e-ae38-1c37b0847ad4",
      name: "Rahul Verma",
      phone: "+91-2109876543",
      email: "rahul.verma@example.com",
      isFavourite: false,
    },
  ],
  editContact: {
    id: "",
    name: "",
    email: "",
    phone: "",
    isFavourite: "",
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addNewContact(state, action) {
      let index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );

      if (index !== -1) {
        state.contacts[index] = action.payload;
        state.editContact = {
          id: "",
          name: "",
          email: "",
          phone: "",
          isFavourite: "",
        };
      } else {
        state.contacts.push(action.payload);
      }
    },
    handleFavorite(state, action) {
      state.contacts.forEach((contact) => {
        if (contact.id === action.payload) {
          contact.isFavourite = !contact.isFavourite;
          return;
        }
      });
    },
    handleDeleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    handleRemoveAllContact(state, action) {
      state.contacts = [];
    },
    handleEditContact(state, action) {
      state.editContact = state.contacts.find(
        (contact) => contact.id === action.payload
      );
    },
    addRandomContact(state, action) {
      state.contacts.push(action.payload);
    },
  },
});

export const contactsAction = contactsSlice.actions;
export default contactsSlice.reducer;
