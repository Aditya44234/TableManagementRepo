import { createSlice } from '@reduxjs/toolkit'

import initialData from '../data.js'


const initialState = {
    data: initialData,
    filter: '',
    sort: { key: 'id', direction: 'asc' },
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        // Action to set the entire dataset (e.g., from an API)
        setData: (state, action) => {
            state.data = action.payload
        },
        // Action to add a new entry to the table
        addData: (state, action) => {
            // We add the new item to the beginning of the array
            const maxId = state.data.reduce((max, item) => Math.max(max, item.id), 0)
            state.data.unshift({ ...action.payload, id: maxId + 1 })
        },
        // Action to set the global filter string
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        // Action to set the sorting configuration
        setSort: (state, action) => {
            state.sort = action.payload
        },
    },
})

// Export actions for use in components
export const { setData, addData, setFilter, setSort } = tableSlice.actions

// Selector to get filtered and sorted data
// This logic could also be in a component, but keeping it here or in a selector function is good practice
export const selectFilteredData = (state) => {
    const { data, filter, sort } = state.table

    // 1. Filter data
    let filtered = data.filter((item) =>
        Object.values(item).some((val) =>
            String(val).toLowerCase().includes(filter.toLowerCase())
        )
    )

    // 2. Sort data
    if (sort.key) {
        filtered.sort((a, b) => {
            const aVal = a[sort.key]
            const bVal = b[sort.key]

            if (aVal < bVal) return sort.direction === 'asc' ? -1 : 1
            if (aVal > bVal) return sort.direction === 'asc' ? 1 : -1
            return 0
        })
    }

    return filtered
}

export default tableSlice.reducer
