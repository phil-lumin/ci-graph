export function getWorkflows(config: Yaml) {
	const workflows: Workflow[] = [];

	Object.entries(config).forEach(([workflowName, workflowConfig]) => {
		const workflow: Workflow = {
			name: workflowName,
			jobs: []
		};

		workflowConfig.jobs.forEach((job: Job) => {
			workflow.jobs.push({
				name: getName(job) ?? Object.keys(job)[0],
				requirements: getRequirements(job)
			});
		});

		workflows.push(workflow);
	});

	return workflows;
}

function getName(config: Yaml): string | null {
	let name = null;
	for (const [key, val] of Object.entries(config)) {
		if (name) {
			break;
		}

		if (key === "name") {
			name = val;
			break;
		}

		if (typeof val === "object") {
			name = getName(val);
		}
	}
	return name;
}

function getRequirements(config: Yaml): string[] {
	const entries: string[] = [];
	Object.entries(config).forEach(([key, val]) => {
		if (key === "requires") {
			entries.push(val);
		}

		if (typeof val === "object") {
			entries.push(...getRequirements(val).flat());
		}
	});
	return entries.flat();
}

export function workflowToDOT(workflow: Workflow): string {
	const deps: string[] = [];

	workflow.jobs?.forEach((job) => {
		job.requirements?.forEach((item) => {
			deps.push(`\t"${item}" -> "${job.name}" [color="#cf6400" arrowsize=0.8]`);
		});
	});

	return `digraph dependencies {
    bgcolor="#171a20"
    node [shape="box", color="#3c4961ff", style="rounded,filled", fillcolor="#2d3748", fontsize="11", fontcolor="#cbd5e0", margin="0.3, 0", height="0.4", fontname="Inter,monospace"]
    ${deps.join(";\n")}
  }`;
}

export interface Workflow {
	name: string;
	jobs: Job[];
}

export interface Job {
	name: string;
	requirements: string[];
}
