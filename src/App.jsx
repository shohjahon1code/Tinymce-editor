import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import Iframe from "./components/Iframe/Iframe";

function App() {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
      id="editor"
      skin='oxide'
      onInit={(evt, editor)=> editorRef.current = editor}
        apiKey="gdzgc2p88mm1n6glf40dowaiyrdh7fe0evicilbzjlvj2rbq"
        initialValue="Shohjahon"
        init={{
          height: 600,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Look at the console after click</button>
    </>
  );
}

export default App;
