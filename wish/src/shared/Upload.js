import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef();
  // const is_uploading = useSelector((state) => state.image.uploading);

  const selectFile = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files[0]);

    console.log(fileInput.current.files[0]);

    const reader = new FileReader();
    const file = fileInput.current.files[0];
    // 파일내용 읽어옴
    reader.readAsDataURL(file);
  };

  return (
    <React.Fragment>
      <input
        type="file"
        onChange={selectFile}
        ref={fileInput}
        // disabled={is_uploading}
      />
    </React.Fragment>
  );
};

export default Upload;
