import { createSlice } from "@reduxjs/toolkit";

const storeInitialState = {
  storeId: "",
  storePassword: "",
  storeName: "",
  storeAddress: "",
  storeDetailAddress: "",
  storePostCode: "",
  status: false,
  items: [],
  storeConTactNumber: "",
  certification: "",
  ownerName: "",
  tag: "",
  dailyCount: 0,
  workingInfo: [],
  statics: [],
  todoList: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState: storeInitialState,
  reducers: {
    setStore: (state, action) => {
      state.storeId = action.payload.storeId;
      state.storePassword = action.payload.storePassword;
      state.storeName = action.payload.storeName;
      state.storeAddress = action.payload.storeAddress;
      state.storeDetailAddress = action.payload.storeDetailAddress;
      state.storePostCode = action.payload.storePostCode;
      state.status = action.payload.status;
      state.items = action.payload.items;
      state.storeConTactNumber = action.payload.storeConTactNumber;
      state.certification = action.payload.certification;
      state.ownerName = action.payload.ownerName;
      state.tag = action.payload.tag;
      state.dailyCount = action.payload.dailyCount;
      state.workingInfo = action.payload.workingInfo;
      state.statics = action.payload.statics;
      state.todoList = action.payload.todoList;
    },

    addMemo: (state, action) => {
      state.todoList.push(action.payload);
    },

    deleteMemo: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
  },
});

export const { setStore, addMemo, deleteMemo } = storeSlice.actions;

export default storeSlice.reducer;
