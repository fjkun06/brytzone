import React, { useState, createRef, ChangeEvent } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./Demo.css";
import formatFileSize from "@/utils/formatFlieSize";

const defaultSrc = "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export const Demo: React.FC = () => {
  const [image, setImage] = useState(undefined);
  const [cropData, setCropData] = useState("");
  const [showCropper, setSetshowCropper] = useState(false);
  const cropperRef = createRef<ReactCropperElement>();
  const onChange = (e: any) => {
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
    console.log(files[0]);

    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const data = cropperRef.current?.cropper.getCroppedCanvas()

      setCropData(data.toDataURL());

      data.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "cropped-image.png", {
            type: "image/png",
            lastModified: Date.now(),
          });
          // setCroppedImage(file);

          console.log(file);
          
        }
      }, "image/png");
    }
  };

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      console.log(cropper?.getCroppedCanvas().toDataURL());
      const croppedCanvas = cropper.getCroppedCanvas();
      const maxWidth = croppedCanvas.width;
      const maxHeight = croppedCanvas.height;
      console.log("Max Width:", maxWidth);
      console.log("Max Height:", maxHeight);
    }
  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        <input type="file" onChange={onChange} />
        <br />
        <br />
        {showCropper && (
          <Cropper
            ref={cropperRef}
            style={{ height: 400, width: 400 }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            guides={true}
            crop={onCrop}
            cropBoxResizable={false}
          />
        )}
      </div>
      {showCropper && (
        <div>
          <div className="box" style={{ width: "50%", float: "right" }}>
            <h1>Preview</h1>
            <div className="img-preview" style={{ width: "100%", float: "left", height: "300px" }} />
          </div>
          <>
            <div className="box" style={{ width: "50%", float: "right", height: "300px" }}>
              <h1>
                <span>Crop</span>
                <button style={{ float: "right" }} onClick={getCropData}>
                  Crop Image
                </button>
              </h1>
              {cropData.length > 0 && <img style={{ width: "200px", height: "200px" }} src={cropData} alt="cropped" />}
            </div>
          </>
        </div>
      )}

      <br style={{ clear: "both" }} />
    </div>
  );
};

export default Demo;
