import React, { useCallback, useState } from "react";
import useEditorConfig from "../../hooks/useEditorConfig";
import { Editable, Slate, withReact } from "slate-react";
import Toolbar from "./Toolbar";
import useSelection from "../../hooks/useSelection";
import { createEditor } from "slate";

const Editor = ({ initialValue, onChange }) => {
  //This is done like this inorder to prevent the editor instance getting recreated across re-renders.
  // useMemo can't be used here as per react docs.
  const [editor] = useState(() => withReact(createEditor()));

  const { renderElement, renderLeaf } = useEditorConfig(editor);
  const [selection, setSelection] = useSelection(editor);

  const handleChange = useCallback((doc) => {
    onChange(doc);
    setSelection(editor.selection);
  }, []);

  return (
    //  This component acts as a provider to its children
    <Slate editor={editor} initialValue={initialValue} onChange={handleChange}>
      <Toolbar selection={selection} />
      <Editable
        className="editor"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
    </Slate>
  );
};

export default Editor;
