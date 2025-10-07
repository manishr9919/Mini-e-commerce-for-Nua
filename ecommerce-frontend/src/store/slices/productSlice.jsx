import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const cached = localStorage.getItem('products')
  if (cached) return JSON.parse(cached)
  const res = await api.get('/products')
  localStorage.setItem('products', JSON.stringify(res.data))
  return res.data
})

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const cached = localStorage.getItem('categories')
  if (cached) return JSON.parse(cached)
  const res = await api.get('/products/categories')
  localStorage.setItem('categories', JSON.stringify(res.data))
  return res.data
})

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
  },
})

export default productSlice.reducer
