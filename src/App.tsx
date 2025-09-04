import { parse } from "yaml";
import { useState } from "react";
import Input from "./Input";
import "./App.css";
import WorkflowGraph from "./WorkflowGraph";

function App() {
	const [yaml, setYaml] = useState<Yaml | null>(null);
	const [yamlError, setYamlError] = useState<string | null>(null);

	function handleInput(text: string) {
		setYamlError(null);
		if (!text) {
			setYaml(null);
			return;
		}
		try {
			const yamlValue = parse(text);
			if (!yamlValue.workflows) {
				throw new Error("Config does not contain any workflows");
			}
			setYaml(yamlValue);
		} catch (err) {
			setYaml(null);
			setYamlError((err as Error).message);
		}
	}

	return (
		<div className="app">
			<div className="app-input">
				<Input onChange={handleInput} />
			</div>
			{!!yaml && (
				<div className="app-output">
					<div className="output">
						<WorkflowGraph workflowsYaml={yaml.workflows} />
					</div>
				</div>
			)}
			{yamlError && <div className="yamlError">Invalid YAML: {yamlError}</div>}
		</div>
	);
}

export default App;
