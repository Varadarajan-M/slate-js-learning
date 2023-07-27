export const initialData = [
  {
    type: "h1",
    children: [{ text: "Heading 1" }],
  },
  {
    type: "h2",
    children: [{ text: "Heading 2" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Hello World! This is my paragraph inside a sample document.",
      },
      {
        text: "And this is a bold content",
        bold: true,
      },
      {
        text: "And this is Italic ",
        italic: true,
        underline: true,
        bold: true,
      },
      {
        text: "       ",
      },
      {
        text: "......And this is Italic, Bold and underlined content ",
        italic: true,
        underline: true,
        bold: true,
      },
      {
        text: "<h1>Hello World</h1>",
        code: true,
      },
    ],
  },
];
