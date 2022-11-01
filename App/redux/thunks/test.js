import { createAsyncThunk } from '@reduxjs/toolkit'

import { fetchApi } from 'libs'

export const getAllSuppliers = createAsyncThunk('goodsNotes/getAllSuppliers', async (data: any) => {
  const response = await fetchApi.get('/api/v1/goodsNotes/get-all-suppliers', { params: data });
  return response.data;
})