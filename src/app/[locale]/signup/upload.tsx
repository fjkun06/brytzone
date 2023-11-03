/* eslint-disable @next/next/no-img-element */
import { FileInput } from "@/stories/components/Input";
import { backendPort, genId } from "@/utils/config";
import formatFileSize from "@/utils/formatFlieSize";
import axios from "axios";
import React, { useState, createRef, ChangeEvent } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { motion, AnimatePresence } from "framer-motion";

interface FileState {
  file: File | null;
  error: string | null;
}

const initialState: FileState = {
  file: null,
  error: null,
};

const Filer = ({ setter }: { setter: (pic: File | undefined) => void }) => {
  const [fileState, setFileState] = useState<FileState>(initialState);
  //cropper states
  const [image, setImage] = useState(undefined);
  const [cropData, setCropData] = useState("");
  const [showCropper, setSetshowCropper] = useState(false);
  const cropperRef = createRef<ReactCropperElement>();

  const handleFileSend = async () => {
    try {
      const res = await axios.post(
        `http://localhost:${backendPort}/upload`,
        { avatar: fileState.file },
        {
          headers: { "Content-Type": "multipart/form-data" },

          withCredentials: true,
        }
      );

      console.log(res); // Handle the response as needed
    } catch (error: any) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }
    // Validate the file if needed
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      setFileState({ file: null, error: "Invalid file type. Please select a JPEG or PNG image." });
      return;
    }

    console.log(file, formatFileSize(file.size));

    // Set the selected file in the state
    setFileState({ file, error: null });

    //handle crop operations
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
      setSetshowCropper(true);
    };

    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper === "undefined") {
      return;
    }
    const data = cropperRef.current?.cropper.getCroppedCanvas();

    setCropData(data.toDataURL());

    data.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], `${genId()}.png`, {
          type: "image/png",
          lastModified: Date.now(),
        });
        // setCroppedImage(file);

        console.log(file);
        //passfile to hookform
        setter(file);
      }
    }, "image/png");
  };

  const handleConfirm = () => {
    setSetshowCropper(false);
  };

  return (
    <div className="file_main">
      <FileInput label="upload profile picture" fileName={fileState?.file?.name} fileSize={formatFileSize(fileState?.file?.size as number)} onChange={handleFileChange} />

      {/* {fileState?.file?.size && <span>{formatFileSize(fileState?.file?.size)}</span>} */}
      {fileState.error && <p>{fileState.error}</p>}
      <AnimatePresence>
        {showCropper && (
          <motion.div className="file_crop" animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
            <div className="file_crop_cropper">
              <span id="closer" onClick={() => setSetshowCropper(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </span>
              <Cropper
                ref={cropperRef}
                // style={{ height: 400, width: 400 }}
                zoomTo={0.5}
                initialAspectRatio={1}
                src={image}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                guides={true}
                cropBoxResizable={false}
              />
              <p className="btn">
                <button type="button" style={{ float: "right" }} onClick={getCropData}>
                  Crop Image
                </button>
                <button type="button" style={{ float: "right" }} onClick={handleConfirm}>
                  Confirm Image
                </button>
              </p>
            </div>

            <div className="file_crop_preview">
              <div className="box">
                <h1>Crop Preview</h1>

                {/* <button style={{ float: "right" }} onClick={getCropData}>
              Crop Image
            </button> */}

                {/* <img src={cropData} alt="cropped" /> */}
                {cropData.length > 0 && <img src={cropData} alt="cropped" />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* {fileState?.file?.size && (
        <button type="button" onClick={handleFileSend}>
          Send
        </button>
      )} */}
    </div>
  );
};

export default Filer;
