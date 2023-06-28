import { useState } from 'react';
import ImageCropper from './cropper';

export default function MyPage() {
  const [croppedImage, setCroppedImage] = useState('');

  const handleCrop = (blob:any) => {
    setCroppedImage(URL.createObjectURL(blob));
  };

  return (
    <div>
      <ImageCropper src="/example.jpg" maxWidth={800} maxHeight={600} onCrop={handleCrop} />
      {croppedImage && <img src={croppedImage} alt="Cropped image" />}
    </div>
  );
}