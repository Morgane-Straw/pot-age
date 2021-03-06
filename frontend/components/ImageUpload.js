import { UiFileInputButton } from "./UIFileInputButton";
import axios from "axios";
import { useState, useEffect } from "react";

const ImageUpload = (props) => {
  const [imgUpload, setImgUpload] = useState(props.img);
  useEffect(() => props.setFile(imgUpload), [imgUpload]);
  const onChange = async (formData) => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };
    const response = await axios
      .post(process.env.NEXT_PUBLIC_FRONTEND_ADDRESS + '/api/uploadfile', formData, config)
      .then((res) => setImgUpload({
        raw: process.env.NEXT_PUBLIC_Upload_Spot + '/' + res.data.data,
        small: process.env.NEXT_PUBLIC_Upload_Spot + '/' + res.data.data,
        regular:process.env.NEXT_PUBLIC_Upload_Spot + '/' + res.data.data,
      }));

  };

  return (<>
    <div className="d-flex flex-row">
      <UiFileInputButton
        uploadFileName="theFiles"
        onChange={onChange}
      >
        <img src="img/pictures.svg" className="h-1 me-2"></img>
        Parcourir
      </UiFileInputButton>
      {/* <span className="mx-2">{imgUpload ? imgUpload.raw : ""}</span> */}
    </div>
    {imgUpload ?
      <img
        className={"h-img-banque my-5 flex-grow-0 cursor-pointer rounded-3 " + (imgUpload.raw == props.img.raw && imgUpload.raw ? "shadow-selected" : "")}
        src={imgUpload.raw}
        onClick={() => props.setFile({ raw: imgUpload.raw })}
      /> : ""}

  </>
  );
};
export default ImageUpload;