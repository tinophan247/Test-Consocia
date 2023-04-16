import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCount: 0,
  },
  reducers: {
    getRecentlyViewedList : (state,action) => {
      let index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        //Check trường hợp bị trùng sp, nếu trùng thì sẽ xóa thằng bị trùng, cập nhật thằng mới ở đầu list
        state.items.splice(index,1);
      }
      //Nếu không trùng thì add sp vô list
        state.items.push(action.payload)
      if(state.items.length > 4) {
        //Vì giới hạn là 4 sản phẩm, nên khi lớn hơn 4 sẽ xóa phần tử đầu tiên
          state.items.shift();
      }
    }
    //Trường hợp xóa sản phẩm - Tính năng chưa được thực hiện
    //Ý tưởng ,khi xóa một sản phẩm ra khỏi list sẽ kiểm tra id của sp của list có bằng với id sản phẩm của list recently không, nếu sản phẩm tồn tại trên list recently mà không tồn tại ở list sp thì dùng hàm splice xóa sp tại vị trí index
  },
});

export const {getRecentlyViewedList} = cartSlice.actions;
export default cartSlice.reducer;
