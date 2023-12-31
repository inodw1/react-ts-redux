import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type CardItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
};

type CardState = {
    items: CardItem[];
};

const initialState: CardState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(
            state,
            action: PayloadAction<{ id: string; title: string; price: number }>
        ) {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart() {},
    },
});
