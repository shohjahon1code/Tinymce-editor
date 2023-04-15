import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Iframe = () => {
  const [value, setValue] = useState("");
  const handleEditorChange = (content, editor) => {
    setValue(content);
  };
  return (
    <Editor
      apiKey="gdzgc2p88mm1n6glf40dowaiyrdh7fe0evicilbzjlvj2rbq"
      initialValue="initial value"
      value={value}
      init={{
        inline: false,
        selector: "textarea.tinymce",
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
        height: 500,
        menubar: false,
        setup: (editor) => {
          editor.on("init", () => {
            editor.getContainer().style.visibility = "";
          });
        },
      }}
      onEditorChange={handleEditorChange}
      outputFormat="html"
    />
  );
};

export default Iframe;
