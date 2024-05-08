/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {post, get, postWithJson, postWithPatch} from './services/api';
import {showMessage} from 'react-native-flash-message';
import {rootUrl} from '../../utils/constants';


export const getProducts = createAsyncThunk(
  'store/products',
  async () => {
    try {
      let payload = {
        url: `${rootUrl}/products`,
      };
      const response: any = await get(payload);
      return await response?.data;
    } catch (err: any) {
      if (err?.error?.error?.message) {
        showMessage({
          message: 'Error',
          description: err?.error?.error?.message,
          type: 'danger',
        });
        throw err;
      } else {
        showMessage({
          message: 'Error',
          description: err?.response?.data?.message?.toString(),
          type: 'danger',
        });
        throw err;
      }
    }
  },
);


const initialState = {
  loading: false,
  allProducts: [],
 
  
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    resetError(state) {},
    
  },

  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.loading = true;
    
    });
    builder.addCase(getProducts.fulfilled, (state, action: any) => {
      state.loading = false;
      // console.log(action.payload)
      state.allProducts = action.payload?.products;
    });
    builder.addCase(getProducts.rejected, (state, error: any) => {
      state.loading = false;
    
    });

  },
});

export const {resetError} = authSlice.actions;

export default authSlice.reducer;
