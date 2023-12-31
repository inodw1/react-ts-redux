import { createSlice } from "@reduxjs/toolkit";

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
        addToCart() {},
        removeFromCart() {},
    },
});
