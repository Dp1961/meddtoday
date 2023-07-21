import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './common'
import customerReducer from './customerApi'
import productReducer from './product'
import cartReducer from "./cart"
import backupReducer from "./backup"

 const store = configureStore({
  reducer: {apiReducer,customerReducer,productReducer,cartReducer, backupReducer}
})

export default store