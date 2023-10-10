import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_portfolio_list = createAsyncThunk(
  "portfolios/api_v1_portfolio_list",
  async payload => {
    const response = await apiService.api_v1_portfolio_list(payload)
    return response.data
  }
)
export const api_v1_portfolio_create = createAsyncThunk(
  "portfolios/api_v1_portfolio_create",
  async payload => {
    const response = await apiService.api_v1_portfolio_create(payload)
    return response.data
  }
)
export const api_v1_portfolio_retrieve = createAsyncThunk(
  "portfolios/api_v1_portfolio_retrieve",
  async payload => {
    const response = await apiService.api_v1_portfolio_retrieve(payload)
    return response.data
  }
)
export const api_v1_portfolio_update = createAsyncThunk(
  "portfolios/api_v1_portfolio_update",
  async payload => {
    const response = await apiService.api_v1_portfolio_update(payload)
    return response.data
  }
)
export const api_v1_portfolio_partial_update = createAsyncThunk(
  "portfolios/api_v1_portfolio_partial_update",
  async payload => {
    const response = await apiService.api_v1_portfolio_partial_update(payload)
    return response.data
  }
)
export const api_v1_portfolio_destroy = createAsyncThunk(
  "portfolios/api_v1_portfolio_destroy",
  async payload => {
    const response = await apiService.api_v1_portfolio_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const portfoliosSlice = createSlice({
  name: "portfolios",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_portfolio_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_portfolio_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_portfolio_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_portfolio_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_portfolio_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_portfolio_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_portfolio_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_portfolio_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_portfolio_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_portfolio_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_portfolio_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_portfolio_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_portfolio_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_portfolio_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_portfolio_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_portfolio_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_portfolio_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_portfolio_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_portfolio_list,
  api_v1_portfolio_create,
  api_v1_portfolio_retrieve,
  api_v1_portfolio_update,
  api_v1_portfolio_partial_update,
  api_v1_portfolio_destroy,
  slice: portfoliosSlice
}
