import MemoList from '../MemoList';
import SideBarFooter from '../SideBarFooter';
import SideBarHaeder from '../SideBarHeader';
import './index.css';

function SideBar({
  memos,
  setSelectMemoIndex,
  selectMemoIndex,
  addMemo,
  deleteMemo,
}) {
  return (
    <div className="SideBar">
      <SideBarHaeder />
      <MemoList
        memos={memos}
        setSelectMemoIndex={setSelectMemoIndex}
        selectMemoIndex={selectMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

export default SideBar;
