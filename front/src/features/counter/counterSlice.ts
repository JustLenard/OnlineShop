import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
	value: number
}

const initialState: CounterState = {
	value: 0,
}

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		// increment counter
		incremented(state) {
			// Because of Immmer you can directly mutate the state like this since under the hood it will do all the copying and stuff
			state.value++
		},
	},
})

export const { incremented } = counterSlice.actions
export default counterSlice.reducer
