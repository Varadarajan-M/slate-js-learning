export function CodeElement(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}

export function HeaderElement1(props) {
  return <h1 {...props.attributes}>{props.children}</h1>;
}

export function HeaderElement2(props) {
  return <h2 {...props.attributes}>{props.children}</h2>;
}

export function HeaderElement3(props) {
  return <h3 {...props.attributes}>{props.children}</h3>;
}

export function ParaElement(props) {
  return <p {...props.attributes}>{props.children}</p>;
}

export function BoldLeaf(props) {
  return <strong {...props}>{props.children}</strong>;
}

export function ItalicLeaf(props) {
  return <em {...props}>{props.children}</em>;
}
export function UnderlinedLeaf(props) {
  return (
    <span {...props} style={{ textDecoration: "underline" }}>
      {props.children}
    </span>
  );
}
