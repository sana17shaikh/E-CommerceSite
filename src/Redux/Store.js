import {configureStore} from "@reduxjs/toolkit"
import rootReducers from "./Reducer/Index"

const store = configureStore({
    reducer: rootReducers,
})

export default store