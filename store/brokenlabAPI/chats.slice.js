import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_chat_list = createAsyncThunk(
  "chats/api_v1_chat_list",
  async payload => {
    const response = await apiService.api_v1_chat_list(payload)
    return response.data
  }
)
export const api_v1_chat_create = createAsyncThunk(
  "chats/api_v1_chat_create",
  async payload => {
    const response = await apiService.api_v1_chat_create(payload)
    return response.data
  }
)
export const api_v1_chat_retrieve = createAsyncThunk(
  "chats/api_v1_chat_retrieve",
  async payload => {
    const response = await apiService.api_v1_chat_retrieve(payload)
    return response.data
  }
)
export const api_v1_chat_update = createAsyncThunk(
  "chats/api_v1_chat_update",
  async payload => {
    const response = await apiService.api_v1_chat_update(payload)
    return response.data
  }
)
export const api_v1_chat_partial_update = createAsyncThunk(
  "chats/api_v1_chat_partial_update",
  async payload => {
    const response = await apiService.api_v1_chat_partial_update(payload)
    return response.data
  }
)
export const api_v1_chat_destroy = createAsyncThunk(
  "chats/api_v1_chat_destroy",
  async payload => {
    const response = await apiService.api_v1_chat_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_chat_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chat_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_chat_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_chat_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chat_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_chat_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_chat_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chat_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_chat_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_chat_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chat_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_chat_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_chat_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chat_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_chat_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_chat_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chat_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_chat_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_chat_list,
  api_v1_chat_create,
  api_v1_chat_retrieve,
  api_v1_chat_update,
  api_v1_chat_partial_update,
  api_v1_chat_destroy,
  slice: chatsSlice
}
