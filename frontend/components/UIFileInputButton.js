import { useRef } from "react";

export const UiFileInputButton = (props) => {

  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (event) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    props.onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <button
        className={"d-flex justify-content-center align-items-center d-block rounded py-1 px-3 w-button" + (props.label == "Retour" ? " border border-primary text-primary" : " bg-primary text-white")}
        type="button" onClick={onClickHandler}>
        {props.children}

        <input
          accept={props.acceptedFileTypes}
          multiple={props.allowMultipleFiles}
          name={props.uploadFileName}
          onChange={onChangeHandler}
          ref={fileInputRef}
          style={{ display: 'none' }}
          type="file"
        /></button>
    </form>
  );
};

