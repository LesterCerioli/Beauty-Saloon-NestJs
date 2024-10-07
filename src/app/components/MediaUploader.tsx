import { useState } from 'react';

export default function MediaUploader() {
  const [media, setMedia] = useState<File[]>([]);

  const uploadMedia = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setMedia([...media, ...files]);
    }
  };

  return (
    <div>
      <h1>Upload de Mídia</h1>
      <input type="file" multiple onChange={uploadMedia} />
      <ul>
        {media.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}
