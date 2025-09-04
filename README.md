# CircleCI Config Map

A web-based visualization tool for CircleCI workflow configurations. This tool generates a visual graph representation of your CircleCI workflows, making it easier to understand job dependencies and workflow structure.

## Features

- Paste CircleCI YAML configuration to visualize workflows
- Interactive graph visualization of job dependencies
- Real-time YAML parsing and error detection
- Dark mode interface
- Support for multiple workflows

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Usage

1. Open the application in your browser
2. Paste your CircleCI configuration YAML into the editor
3. The visualization will automatically generate on the right side
4. If there are any YAML parsing errors, they will be displayed at the bottom

## Tech Stack

- React
- TypeScript
- Vite
- viz-js (for graph visualization)
- YAML parser
- Prism React Editor

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT
