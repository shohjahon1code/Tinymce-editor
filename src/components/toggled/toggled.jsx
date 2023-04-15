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
