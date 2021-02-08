import "./cell-list-item.css";
import { Cell } from "../store/";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";
import ActionBar from "./action-bar";
interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  } else if (cell.type === "text") {
    child = (
      <>
        <ActionBar id={cell.id} />
        <TextEditor cell={cell} />
      </>
    );
  } else {
    return <div>Cell error</div>;
  }
  return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;
