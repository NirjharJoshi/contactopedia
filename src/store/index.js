const { configureStore } = require("@reduxjs/toolkit");
import contactsReducer from "./contactSlice.js";

const store = configureStore({
  reducer: {
    contactsState: contactsReducer,
  },
});

export default store;
