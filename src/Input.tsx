import { Editor } from "prism-react-editor";
import { BasicSetup } from "prism-react-editor/setups";
import "prism-react-editor/prism/languages/yaml";
import "prism-react-editor/layout.css";
import "prism-react-editor/themes/prism-tomorrow.css";

export default function Input({ onChange }: InputProps) {
	return (
    <Editor
      language="yaml"
      value=""
      onUpdate={onChange}
      textareaProps={{
        placeholder: "-- Paste a CircleCi config --",
        name: "editor",
        "aria-label": "Code editor",
      }}
    >
      {(editor) => <BasicSetup editor={editor} />}
    </Editor>
  );
}

interface InputProps {
	onChange: (text: string) => void;
}
