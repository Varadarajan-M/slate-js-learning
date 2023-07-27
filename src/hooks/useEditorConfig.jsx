import React, { Fragment, useCallback, useState } from "react";
import { createEditor } from "slate";
import { DefaultElement, withReact } from "slate-react";
import {
  CodeElement,
  ParaElement,
  HeaderElement1,
  HeaderElement2,
  HeaderElement3,
  BoldLeaf,
  ItalicLeaf,
  UnderlinedLeaf,
} from "../components/Editor/Elements";

const useEditorConfig = (editor) => {
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      case "h1":
        return <HeaderElement1 {...props} />;
      case "h2":
        return <HeaderElement2 {...props} />;
      case "h3":
        return <HeaderElement3 {...props} />;
      case "paragraph":
        return <ParaElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    let leaf = <Fragment>{props.children}</Fragment>;

    if (props.leaf.bold) {
      leaf = <BoldLeaf>{leaf}</BoldLeaf>;
    }

    if (props.leaf.italic) {
      leaf = <ItalicLeaf>{leaf}</ItalicLeaf>;
    }

    if (props.leaf.underline) {
      leaf = <UnderlinedLeaf>{leaf}</UnderlinedLeaf>;
    }

    if (props.leaf.code) {
      leaf = <code>{leaf}</code>;
    }

    return <span {...props.attributes}>{leaf}</span>;
  }, []);

  return {
    editor,
    renderElement,
    renderLeaf,
  };
};

export default useEditorConfig;
