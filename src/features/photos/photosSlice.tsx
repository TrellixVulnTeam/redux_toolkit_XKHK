import { createSlice, PayloadAction, createAsyncThunk, AsyncThunkAction } from "@reduxjs/toolkit";
import { AxiosError } from 'axios'
import { photoAPI } from "./photoApi";

export interface PhotoState {
  albumId: number,
  id: number,
  title: string
  url: string,
  thumbnailUrl: string
}

export interface PhotoListState {
  photoList?: PhotoState[]
  error: AxiosError | Error | string
}

const initialState: PhotoListState = {
  photoList: [],
  error: ''
}

export const requestPhotoList:any = createAsyncThunk<PhotoState[]>(
  //액션 네임
  `photo/fetchPhoto`,
  async({}, thunkAPI) => {
    try {
      const res:PhotoState[] = await photoAPI.requestPhotoList()
      return res
    } catch (error) {
      return await thunkAPI.rejectWithValue(error)
    }
  }
)

const photoSlice = createSlice({
  name:'albums',
  initialState: initialState,
  reducers: {
    // fetchPhotoListRequest: (state) => {state.photoList},
    // fetchPhotoListSuccess: (state, action: PayloadAction<PhotoState[]>) => {
    //   state.photoList = action.payload
    // },
    // fetchPhotoListFailure: (state, action: PayloadAction<AxiosError>) => {
    //   state.error = action.payload
    // }
  },
  extraReducers:{
    [requestPhotoList.pending]: (state) => {state.photoList},
    [requestPhotoList.fulfilled]: (state, action: PayloadAction<PhotoState[]>) => {state.photoList = action.payload}
  }
})

// export const { fetchPhotoListSuccess, fetchPhotoListFailure } = photoSlice.actions


export default photoSlice.reducer