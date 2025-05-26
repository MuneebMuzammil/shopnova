import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  stock: number;
  rating: number;
  review_count: number;
  tags: string[];
}

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  categories: string[];
  selectedCategory: string | null;
  searchQuery: string;
  loading: boolean;
}

const initialState: ProductsState = {
  products: [],
  filteredProducts: [],
  categories: [],
  selectedCategory: null,
  searchQuery: '',
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.categories = [...new Set(action.payload.map(p => p.category))];
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
      state.filteredProducts = action.payload 
        ? state.products.filter(p => p.category === action.payload)
        : state.products;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredProducts = state.products.filter(p => 
        p.title.toLowerCase().includes(action.payload.toLowerCase()) ||
        p.description.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setSelectedCategory, setSearchQuery, setLoading } = productsSlice.actions;
export default productsSlice.reducer;
