import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

// import { actionCreators as imageActions } from "../redux/modules/image";

const Upload = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef();

  const [imgFile, setImgFile] = React.useState(null); //파일
  const [imgBase64, setImgBase64] = React.useState([]); // 파일 base64
  const [preImg, setPreImg] = React.useState();

  // const is_uploading = useSelector((state) => state.image.uploading);

  const selectFile = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.files[0]);

    // console.log(fileInput.current.files[0]);

    //미리보기 구현
    setImgFile(e.target.files);
    setImgBase64([]);
    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          // console.log(base64);
          if (base64) {
            //  images.push(base64.toString())
            let base64Sub = base64.toString();
            setPreImg(base64Sub);
            // console.log("FOR문 안쪽", base64Sub);

            dispatch(imageActions.previewImg(base64Sub));

            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);

            //  setImgBase64(newObj);
            // 파일 base64 상태 업데이트
            //  console.log(images)

            // console.log("이미지 배열", imgBase64);
          }
        };
      }
    }

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
