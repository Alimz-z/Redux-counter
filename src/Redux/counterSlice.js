import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter", //like keys or id to verify
    initialState: {
        value : 0,
    },//like use state initial value
    reducers: {
        increment : (state) => { //object we defined
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        },
        incrementByamount :(state , action) => { //smth we pass is payload
            state.value += action.payload;
        }
    }
})