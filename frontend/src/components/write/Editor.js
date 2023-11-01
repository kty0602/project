import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import AWS from 'aws-sdk';
import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);

const s3 = new AWS.S3({
  accessKeyId : process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});


const EditorBlock = styled(Responsive)`
  /* 페이지 위아래 여백 지정 */
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const TitleInput = styled.input`
  font-size: 1rem;
  padding-bottom: 0.5rem;
  border: 1px solid ${palette.gray[5]};
  margin-bottom: 1rem;
  width: 100%;
  text-justify: auto;
`;
const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    border: 1px solid ${palette.gray[5]};
    min-height: 520px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = ({ title, content, onChangeField }) => {
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '내용을 작성하세요...',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
        /* 추가된 코드 */
        ImageResize: {
          parchment: Quill.import('parchment')
        }
      },
    });

    const quill = quillInstance.current;

    const handleImageUpload = async (file) => {

      const fileName = file.name;

      const params = {
        Bucket: process.env.REACT_APP_BUCKET_NAME,
        Key: fileName,
        Body: file,
      };

      try {
        const response = await s3.upload(params).promise();
        const imageUrl = response.Location;

        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', imageUrl);

      } catch (error) {
        console.error('Failed to upload image:', error);
      }
    };

    // 이미지 삽입 버튼을 클릭했을 때
    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', () => {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();

      input.addEventListener('change', () => {
        const file = input.files[0];
        handleImageUpload(file);
      });
    });

    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'content', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = content;
  }, [content]);

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput placeholder="제목을 입력하세요" onChange={onChangeTitle} value={title} />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
