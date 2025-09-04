import { instance, Viz } from "@viz-js/viz";
import { useEffect, useRef, useState } from "react";

export default function Graph({ dot }: GraphProps) {
	const graphRef = useRef<HTMLDivElement>(null);
	const [viz, setViz] = useState<Viz | null>(null);

	useEffect(() => {
		instance().then((value: Viz) => setViz(value));
	}, []);

	useEffect(() => {
		if (graphRef.current && viz) {
			const svg = viz.renderSVGElement(dot);
			graphRef.current.innerHTML = "";
			graphRef.current.appendChild(svg);
		}
	}, [viz, dot]);

	return <div ref={graphRef}></div>;
}

interface GraphProps {
	dot: string;
}
