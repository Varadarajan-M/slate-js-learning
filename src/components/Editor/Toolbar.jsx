import { getActiveStyles, toggleStyles } from "./utils";
import { useSlateStatic } from "slate-react";

const ElementTypes = ["h1", "h2", "h3", "paragraph", "code"];
const CharacterStyles = ["bold", "italic", "underline", "code"];

const Toolbar = (props) => {
  const editor = useSlateStatic();
  return (
    <div className="editor__toolbar">
      {CharacterStyles.map((style) => (
        <Markbutton
          key={style}
          isActive={getActiveStyles(editor).has(style)}
          onMouseDown={(event) => {
            event.preventDefault();
            toggleStyles(editor, style);
          }}
        >
          {style}
        </Markbutton>
      ))}
    </div>
  );
};

function Blockbutton(props) {
  const { isActive, ...rest } = props;
  const className = `editor__toolbar--block-btn ${isActive ? "active" : ""}`;
  return (
    <button className={className} {...rest}>
      {props.children}
    </button>
  );
}

function Markbutton(props) {
  const { isActive, ...rest } = props;
  const className = `editor__toolbar--mark-btn ${isActive ? "active" : ""}`;
  return (
    <button className={className} {...rest}>
      {props.children}
    </button>
  );
}

export default Toolbar;
