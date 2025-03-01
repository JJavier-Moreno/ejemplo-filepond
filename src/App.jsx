import React, { useState } from "react";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const App = () => {
  const [files, setFiles] = useState([]);

  console.log(files);

  return (
    <div className="container">
      <FilePond
        className="filepond"
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={false}
        allowImagePreview={false}
        maxFiles={3}
        server={{
          process: {
            url: "http://localhost:5000/api/upload",
            method: "POST",
            withCredentials: false,
            headers: {},
            timeout: 7000,
          },
        }}
        name="file" /* sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
};

export default App;
