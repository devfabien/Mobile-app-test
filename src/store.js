import { configureStore } from "@reduxjs/toolkit";
import authentication from "./feather/authentication";

export default store= configureStore({
    reducer: {
        storeAuthentication:authentication
    }
})