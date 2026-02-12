import { configureStore } from "@reduxjs/toolkit";
import  settingsReducer  from "./settings-process/settings-process.slice";

export default configureStore({
    reducer:{
        settings: settingsReducer
    }
})