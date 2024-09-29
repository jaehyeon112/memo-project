import './index.css';

function MemoItem({ title, onClickItem, onClickDelete, isSelected }) {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClickItem}
    >
      {title}
      <button className="MeomoItem_delete-button" onClick={onClickDelete}>
        x
      </button>
    </div>
  );
}

export default MemoItem;
