import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
      apiKey='gdzgc2p88mm1n6glf40dowaiyrdh7fe0evicilbzjlvj2rbq'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          selector: 'textarea#edit-image',
          height: 500,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'editimage', 'wordcount'
          ],
          toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
          file_picker_callback: function(callback, value, meta) {
            if (meta.filetype === 'image') {
              const input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              input.onchange = function() {
                const file = this.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function() {
                  const id = 'blobid' + new Date().getTime();
                  const blobCache = tinymce.activeEditor.editorUpload.blobCache;
                  const base64 = reader.result.split(',')[1];
                  const blobInfo = blobCache.create(id, file, base64);
                  callback(blobInfo.blobUri(), { title: file.name });
                };
              };
              input.click();
            }
          },
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}
