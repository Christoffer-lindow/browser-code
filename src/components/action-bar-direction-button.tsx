interface ActionBarButtonProps {
  id: string;
  icon: string;
  direction: any
  action(id: string,direction: string): void
}

const ActionBarDirectionButton: React.FC<ActionBarButtonProps> = ({
  id,
  direction,
  icon,
  action,
}) => {
  return (
    <button
      className="button is-primary is-small"
      onClick={() => action(id, direction)}
    >
      <span className="icon">
        <i className={icon}></i>
      </span>
    </button>
  );
};

export default ActionBarDirectionButton;
