import { createContext } from 'react';

export const cartContext = createContext({
	cartState: [],
	setCartState: (cart) => {},
});
