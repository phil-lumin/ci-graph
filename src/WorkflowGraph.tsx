import { workflowToDOT, getWorkflows, Workflow } from "./workflow";
import Graph from "./Graph";

export default function WorkflowGraph({ workflowsYaml }: WorkflowGraphProps) {
	const workflow = getWorkflows(workflowsYaml);
	if (!workflow) {
		return null;
	}

	return (
		<div>
			{workflow.map((w) => (
				<Graph dot={workflowToDOT(w)} key={w.name} />
			))}
		</div>
	);
}

interface WorkflowGraphProps {
	workflowsYaml: Workflow[];
}
