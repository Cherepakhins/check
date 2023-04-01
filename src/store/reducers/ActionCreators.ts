import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      
     
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить посты");
    }
  }
);
