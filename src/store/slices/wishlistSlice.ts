
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishlistState {
  items: string[];
}

const initialState: WishlistState = {
  items: JSON.parse(localStorage.getItem('wishlist') || '[]'),
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const index = state.items.indexOf(productId);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(productId);
      }
      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },
    setWishlist: (state, action: PayloadAction<string[]>) => {
      state.items = action.payload;
    },
  },
});

export const { toggleWishlist, setWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
