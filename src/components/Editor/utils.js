import { Editor } from "slate";

// Editor.marks(editor) returns the properties(marks) of the currently selected elements.
export const getActiveStyles = (editor) => {
  return new Set(Object.keys(Editor.marks(editor) ?? {}));
};

// For toggling the styles we use the above function as a helper.

export const toggleStyles = (editor, style) => {
  const isActive = getActiveStyles(editor).has(style);

  // if the given style is already applied to the element, then its removed, otherwise added.

  isActive
    ? Editor.removeMark(editor, style)
    : Editor.addMark(editor, style, true);
};
