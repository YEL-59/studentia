import { useState } from "react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

function Editor() {
      const [value, setValue] = useState('');
      console.log(value);
  return (
    <div className="w-full">
      <ReactQuill
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="The content starts here..."
      />
    </div>
  );
}

export default Editor;
