import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_seller_list = createAsyncThunk(
  "sellers/api_v1_seller_list",
  async payload => {
    const response = await apiService.api_v1_seller_list(payload)
    return response.data
  }
)
export const api_v1_seller_create = createAsyncThunk(
  "sellers/api_v1_seller_create",
  async payload => {
    const response = await apiService.api_v1_seller_create(payload)
    return response.data
  }
)
export const api_v1_seller_retrieve = createAsyncThunk(
  "sellers/api_v1_seller_retrieve",
  async payload => {
    const response = await apiService.api_v1_seller_retrieve(payload)
    return response.data
  }
)
export const api_v1_seller_update = createAsyncThunk(
  "sellers/api_v1_seller_update",
  async payload => {
    const response = await apiService.api_v1_seller_update(payload)
    return response.data
  }
)
export const api_v1_seller_partial_update = createAsyncThunk(
  "sellers/api_v1_seller_partial_update",
  async payload => {
    const response = await apiService.api_v1_seller_partial_update(payload)
    return response.data
  }
)
export const api_v1_seller_destroy = createAsyncThunk(
  "sellers/api_v1_seller_destroy",
  async payload => {
    const response = await apiService.api_v1_seller_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sellersSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_seller_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_seller_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seller_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seller_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_seller_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seller_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seller_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_seller_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seller_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seller_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_seller_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seller_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seller_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_seller_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seller_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seller_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_seller_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_seller_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_seller_list,
  api_v1_seller_create,
  api_v1_seller_retrieve,
  api_v1_seller_update,
  api_v1_seller_partial_update,
  api_v1_seller_destroy,
  slice: sellersSlice
}
