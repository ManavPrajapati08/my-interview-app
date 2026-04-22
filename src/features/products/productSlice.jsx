import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpService } from "../../services/httpServices";



export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const data = await httpService.get('/products')
        return data.products
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const addProducts = createAsyncThunk('products/addProduct', async (product, { rejectWithValue }) => {
    try {
        const data = await httpService.post('/products/add', product)
        return data
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const updateProducts = createAsyncThunk('products/updateProduct', async (product, { rejectWithValue }) => {
    try {
        const data = await httpService.post(`/products/update/${product.id}`, product);
        return data
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


export const deleteProducts = createAsyncThunk('products/deleteProduct', async (id) => {
    try {
        const data = await httpService.delete(`products/${id}`);
        return data
    } catch (error) {
        return error.message;
    }
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
        builder.addCase(addProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products.unshift(action.payload)
        })
        builder.addCase(updateProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            const index = state.products.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload
            }
        })
        builder.addCase(deleteProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            const index = state.products.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.products.splice(index, 1)
            }
        })

    }

})

export default productSlice.reducer;