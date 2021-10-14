import { createAction, handleActions } from "redux-actions";
// 둘째, immer를 가지고와야 불변성관리가 편하다.
import { produce } from "immer";

const PRE_IMG = "PRE_IMG";

const preview = createAction(PRE_IMG, (preview) => ({ preview }));

const initialState = {
  preview_img: null,
};

const previewImg = (img = "") => {
  return function (dispatch, getState, { history }) {
    dispatch(
      preview({
        previewImage: img,
      })
    );
  };
};

export default handleActions(
  {
    [PRE_IMG]: (state, action) =>
      produce(state, (draft) => {
        // console.log("여기", action);
        // console.log("여기", action.payload);
        // console.log("이것은 값", action.payload.preview.previewImage);

        draft.previewImage = action.payload.preview.previewImage;
      }),
  },
  initialState
);

const actionCreators = {
  previewImg,
};

export { actionCreators };
