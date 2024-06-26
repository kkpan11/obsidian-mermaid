import { IMermaidElement } from "src/core/IMermaidElement";
import { ElementCategory } from "../core/ElementCategory";

export const flowchartElements: IMermaidElement[] = [
	// flowchart
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "a simple flowchart with top to down direction",
		content: `flowchart TD\nStart --> Stop`,
		sortingOrder: 1,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "a simple flowchart with left to right direction",
		content: "flowchart LR\nStart --> Stop",
		sortingOrder: 2,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "A node with round edges",
		content: "id1(Some text)",
		sortingOrder: 3,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "A stadium-shaped node",
		content: "id1([Some text])",
		sortingOrder: 4,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "A node in a cylindrical shape",
		content: "id1[(Database)]",
		sortingOrder: 5,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Circle",
		content: "id1((Some text))",
		sortingOrder: 6,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Rhombus",
		content: "id1{Some text}",
		sortingOrder: 7,
		isPinned: false,
	},

	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Hexagon",
		content: "id1{{Some text}}",
		sortingOrder: 8,
		isPinned: false,
	},

	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Parallelogram skewed right",
		content: "id1[/Some text/]",
		sortingOrder: 9,
		isPinned: false,
	},

	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Parallelogram skewed left",
		content: "id1[\\Some text\\]",
		sortingOrder: 10,
		isPinned: false,
	},

	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Trapezoid",
		content: "A[/Some text\\]",
		sortingOrder: 11,
		isPinned: false,
	},

	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Trapezoid upside down",
		content: "A[\\Some text/]",
		sortingOrder: 12,
		isPinned: false,
	},

	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Double circle node",
		content: "id1(((Some text)))",
		sortingOrder: 13,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "A link with arrow head",
		content: "A-->B",
		sortingOrder: 14,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "An open link",
		content: "A --- B",
		sortingOrder: 15,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Text on links",
		content: "A-- This is the text! ---B",
		sortingOrder: 16,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "A link with arrow head and text",
		content: "A-->|text|B",
		sortingOrder: 17,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Dotted link",
		content: "A-.->B",
		sortingOrder: 18,
		isPinned: false,
	},
	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Thick link",
		content: "A ==> B",
		sortingOrder: 19,
		isPinned: false,
	},

	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Invisible link",
		content: "A ~~~ B",
		sortingOrder: 20,
		isPinned: false,
	},

	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Link with circle edge",
		content: "A --o B",
		sortingOrder: 21,
		isPinned: false,
	},

	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Link with cross edge",
		content: "A --x B",
		sortingOrder: 22,
		isPinned: false,
	},


	{
		id: crypto.randomUUID(),
		category: ElementCategory.Flowchart,
		description: "Subgraph",
		content: "subgraph one\na1-->a2\nend",
		sortingOrder: 14,
		isPinned: false,
	},
];
