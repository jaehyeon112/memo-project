import MemoItem from '../MemoItem';

function MemoList({ memos, setSelectMemoIndex, selectMemoIndex, deleteMemo }) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          title={memo.title}
          index={index}
          onClickItem={() => {
            setSelectMemoIndex(index);
          }}
          isSelected={index === selectMemoIndex}
          onClickDelete={(e) => {
            deleteMemo(index);
            e.preventDefault();
            e.stopPropagation();
          }}
        />
      ))}
    </div>
  );
}

export default MemoList;
