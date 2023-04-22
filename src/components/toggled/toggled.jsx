import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Toggled = () => {
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleEditorChange = (content) => {
    setContent(content);
  };

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <div>
      <button onClick={toggleDisabled}>
        {disabled ? "Enable" : "Disable"} editor
      </button>
      <Editor
        apiKey="gdzgc2p88mm1n6glf40dowaiyrdh7fe0evicilbzjlvj2rbq"
        value={content}
        initialValue="<b>Hello Dunyo</b>"
        init={{
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditorChange}
        outputFormat="html"
        disabled={disabled}
      />
    </div>
  );
};

export default Toggled;



<Editor
apiKey="gdzgc2p88mm1n6glf40dowaiyrdh7fe0evicilbzjlvj2rbq"
initialValue="<b>Hello Dunyo</b>"
init={{
  // selector: 'textarea#edit-image',
  plugins: [
    'advlist',
    'autolink',
    'lists',
    'link',
    'image',
    'charmap',
    'preview',
    'anchor',
    'searchreplace',
    'visualblocks',
    'code',
    'fullscreen',
    'insertdatetime',
    'media',
    'table',
    'editimage',
    'wordcount',
  ],
  toolbar:
'undo redo | formatselect | bold italic backcolor | \
alignleft aligncenter alignright alignjustify | \
bullist numlist outdent indent | removeformat | help',
  content_style:
'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
  file_picker_callback(callback: (url: string, meta: any) => void, value: string, meta: any) {
    if (meta.filetype === 'image') {
      const input = document.createElement('input');

      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.onchange = function() {
        const file = this.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function() {
          const id = `blobid${ new Date().getTime()}`;
          const blobCache = tinymce.activeEditor.editorUpload.blobCache;
          const base64 = (reader.result as string).split(',')[1];
          const blobInfo = blobCache.create(id, file, base64);

          callback(blobInfo.blobUri(), {title: file.name});
        };
      };
      input.click();
    }
  },
}}
/>