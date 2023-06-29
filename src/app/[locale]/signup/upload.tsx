import { FileInput } from "@/stories/components/Input";
import { backendPort } from "@/utils/config";
import formatFileSize from "@/utils/formatFlieSize";
import axios from "axios";
import { ChangeEvent, useState } from "react";

interface FileState {
  file: File | null;
  error: string | null;
}

const initialState: FileState = {
  file: null,
  error: null,
};

const Filer = () => {
  const [fileState, setFileState] = useState<FileState>(initialState);

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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      // Validate the file if needed
      const allowedTypes = ["image/jpeg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        setFileState({ file: null, error: "Invalid file type. Please select a JPEG or PNG image." });
        return;
      }

      console.log(file, formatFileSize(file.size));

      // Set the selected file in the state
      setFileState({ file, error: null });
    }
  };

  return (
    <div>
      <FileInput label="upload image" fileName={fileState?.file?.name}
      fileSize={formatFileSize(fileState?.file?.size as number)} onChange={handleFileChange} />

      {/* {fileState?.file?.size && <span>{formatFileSize(fileState?.file?.size)}</span>} */}
      {fileState.error && <p>{fileState.error}</p>}
      {/* {fileState?.file?.size && (
        <button type="button" onClick={handleFileSend}>
          Send
        </button>
      )} */}
    </div>
  );
};

export default Filer;
