import React, { useState } from 'react';
import axios from 'axios';

function Fileupload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  // formData라는 instance에 담아 보냄
  const handleFileUpload = () => {
    const aValue = sessionStorage.getItem('username');
    console.log(aValue);
    const formData = new FormData();

    formData.append('userfile', selectedFile, aValue);

    axios
      .post('http://143.248.135.30:3194/uploadfile', formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>업로드</button>
    </>
  );
}

export default Fileupload;
