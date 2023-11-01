import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <div>
      <HeaderContainer/>
      <Responsive>
        <EditorContainer/>
        <WriteActionButtonsContainer/>
      </Responsive>
    </div>
  );
};

export default WritePage;