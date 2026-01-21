import { configureStore } from '@reduxjs/toolkit'
import tableReducer from './tableSlice'

// Configure the Redux store
// We import the reducer from our slice and add it to the store configuration
export const store = configureStore({
    reducer: {
        table: tableReducer,
    },
})
