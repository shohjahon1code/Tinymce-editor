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

                  blogsStore
                  .uploadBlogBanner(formData)
                  .then((result) => {
                    resolve(makeFileUrl(result?.data?.data?.[0]?.url));
                  })
                  .catch((error) => {
                    reject('Upload failed');
                    message.error(error.response?.data?.error?.errMsg);
                  });
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





// const handleFilePickerCallback = (callback: any, value: any, meta: any) => {
  //   if (meta.filetype === 'image') {
  //     const input: HTMLInputElement = document.createElement('input');

  //     input.setAttribute('type', 'file');
  //     input.setAttribute('accept', 'image/*');
  //     input.onchange = function() {
  //       let file: any;

  //       if (input.files && input.files.length > 0) {
  //         file = input.files[0];
  //       }


  //       const reader = new FileReader();

  //       reader.readAsDataURL(file);
  //       reader.onload = function() {
  //         // const id = `blobid${new Date().getTime()}`;
  //         // const blobCache = tinymce.activeEditor.editorUpload.blobCache;
  //         // const base64 = (reader.result as string).split(',')[1];
  //         // const blobInfo = blobCache.create(id, file, base64);

  //         new Promise((resolve, reject) => {
  //           const formData = new FormData();

  //           formData.append('files', file);
  //           formData.append('fileFolder', 'posts/images/');

  //           blogsStore
  //             .uploadBlogBanner(formData)
  //             .then((result) => {
  //               resolve(makeFileUrl(result?.data?.data?.[0]?.url));
  //             })
  //             .catch((error) => {
  //               reject('Upload failed');
  //               message.error(error.response?.data?.error?.errMsg);
  //             });
  //         });

  //         // callback(blobInfo.blobUri(), {title: file.name});
  //       };
  //     };
  //     input.click();
  //   }
  // };
  
   const modules = useMemo(
    () => ({
      toolbar: [
        [{header: [1, 2, 3, 4, 5, 6]}],
        ['bold', 'italic', 'underline'],
        [
          {align: ''},
          {align: 'center'},
          {align: 'right'},
          {align: 'justify'},
        ],
        ['blockquote', 'code-block'],
        [{script: 'sub'}, {script: 'super'}],
        [{indent: '-1'}, {indent: '+1'}],
        [{direction: 'rtl'}],
        [{list: 'ordered'}, {list: 'bullet'}],
        [{size: ['small', false, 'large', 'huge']}],
        ['link', 'image'],
        [
          {
            color: [
              '#000000',
              '#e60000',
              '#ff9900',
              '#ffff00',
              '#008a00',
              '#0066cc',
              '#9933ff',
              '#ffffff',
              '#facccc',
              '#ffebcc',
              '#ffffcc',
              '#cce8cc',
              '#cce0f5',
              '#ebd6ff',
              '#bbbbbb',
              '#f06666',
              '#ffc266',
              '#ffff66',
              '#66b966',
              '#66a3e0',
              '#c285ff',
              '#888888',
              '#a10000',
              '#b26b00',
              '#b2b200',
              '#006100',
              '#0047b2',
              '#6b24b2',
              '#444444',
              '#5c0000',
              '#663d00',
              '#666600',
              '#003700',
              '#002966',
              '#3d1466',
              'custom-color',
            ],
          },
          {
            background: [],
          },
          {
            font: [],
          },
        ],
        [
          {
            clipboard: {
              matchVisual: false,
            },
          },
        ],
      ],

      imageUploader: {
        upload: (file: any) =>
          new Promise((resolve, reject) => {
            const formData = new FormData();

            formData.append('files', file);
            formData.append('fileFolder', 'posts/images/');

            blogsStore
              .uploadBlogBanner(formData)
              .then((result) => {
                resolve(makeFileUrl(result?.data?.data?.[0]?.url));
              })
              .catch((error) => {
                reject('Upload failed');
                message.error(error.response?.data?.error?.errMsg);
              });
          }),
      },
      imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
      },
    }),
    []
  );
