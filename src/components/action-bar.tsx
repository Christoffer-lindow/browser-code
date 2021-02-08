import "./action-bar.css"
import { useActions } from "../hooks/use-actions";
import ActionBarDirectionButton from "./action-bar-direction-button";
import ActionBarDeleteButton from "./action-bar-delete-button";
import CellList from "./cell-list";
interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();
  return (
    <div className="action-bar">
      <ActionBarDirectionButton
        direction={"up"}
        id={id}
        icon="fas fa-arrow-up"
        action={() => moveCell(id, "up")}
      ></ActionBarDirectionButton>
      <ActionBarDirectionButton
        direction={"down"}
        id={id}
        icon="fas fa-arrow-down"
        action={() => moveCell(id, "down")}
      ></ActionBarDirectionButton>
      <ActionBarDeleteButton
        icon="fas fa-trash-alt"
        id={id}
        action={() => deleteCell(id)}
      />
    </div>
  );
};
export default ActionBar;
