import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {

        addItem: (state, action) => {
            const item = action.payload;

            const existingItem = state.items.find(
                existing => existing.name === item.name
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...item,
                    quantity: 1
                });
            }
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(
                item => item.name !== action.payload
            );
        },

        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;

            const item = state.items.find(
                item => item.name === name
            );

            if (item) {
                if (quantity <= 0) {
                    state.items = state.items.filter(
                        item => item.name !== name
                    );
                } else {
                    item.quantity = quantity;
                }
            }
        }
    }
});

export const {
    addItem,
    removeItem,
    updateQuantity
} = CartSlice.actions;

export default CartSlice.reducer;
