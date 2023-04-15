import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const InlineEditor = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  return (
    <Editor
      apiKey="gdzgc2p88mm1n6glf40dowaiyrdh7fe0evicilbzjlvj2rbq"
      initialValue="initial Inline Editor"
      value={content}
      init={{
        inline: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
      onEditorChange={handleEditorChange}
      outputFormat="html"
    />
  );
};

export default InlineEditor;
