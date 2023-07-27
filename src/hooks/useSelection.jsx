import { useCallback, useState } from "react";
import isEqual from "deep-equal";

const useSelection = (editor) => {
  const [selection, _setSelection] = useState(editor.selection);

  const setSelection = useCallback((newSelection) => {
    if (isEqual(selection, newSelection)) {
      return;
    }
    _setSelection(newSelection);
  }, []);

  return [selection, setSelection];
};

export default useSelection;
