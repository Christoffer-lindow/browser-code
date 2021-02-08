interface ActionBarButtonProps {
    id: string;
    icon: string;
    action(id: string): void
  }
  
  const ActionBarDeleteButton: React.FC<ActionBarButtonProps> = ({
    id,
    icon,
    action,
  }) => {
    return (
      <button
        className="button is-primary is-small"
        onClick={() => action(id)}
      >
        <span className="icon">
          <i className={icon}></i>
        </span>
      </button>
    );
  };
  
  export default ActionBarDeleteButton;
  