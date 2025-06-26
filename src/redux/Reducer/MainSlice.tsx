import { createSlice } from "@reduxjs/toolkit";

interface MainState {
  add: boolean;
  edit: boolean;
  show: boolean;
  editData: any;
}

const initialState: MainState = {
  add: false,
  edit: false,
  show: false,
  editData: {},
};

export const MainSlice = createSlice({
  name: "Initial",
  initialState,
  reducers: {
    handleAddModalOpen: (state) => {
      state.add = true;
    },
    handleAddModalClose: (state) => {
      state.add = false; 
    },
    handleEditModalOpen: (state) => {
      state.edit = true;
    },
    handleEditModalClose: (state) => {
      state.edit = false; 
    },
    handleShowModalOpen: (state) => {
      state.show = true;
    },
    handleShowModalClose: (state) => {
      state.show = false; 
    },
    handleEditData: (state, action) => {
      state.editData = action.payload;
    },
  },
});

export const {
  handleAddModalOpen,
  handleAddModalClose,
  handleEditModalOpen,
  handleEditModalClose,
  handleShowModalOpen,
  handleShowModalClose,
  handleEditData,
} = MainSlice.actions;

export default MainSlice.reducer;

export type RootState = {
  Initial: MainState;
};
