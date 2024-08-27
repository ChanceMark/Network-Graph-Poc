# Network Graph Proof of Concept

This project is a proof of concept (PoC) for creating a dynamic network graph using the Cytoscape JS library. The graph visualizes relationships between different types of objects with a few attributes, presented in a dynamic and interactive way.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Setup

To set up the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/ChanceMark/Network-Graph-Poc.git
    cd Network-Graph-Poc
    ```

2. Open the `index.html` file in your browser to view the network graph.

## Usage

The project uses Cytoscape JS to render a network graph. The graph is initialized with a set of nodes and edges defined in `script.js`.

### Updating the Graph

You can update the graph dynamically by modifying the `updateGraph` function in `script.js`. The function takes a new set of elements and refreshes the graph.

```javascript
function updateGraph(newElements) {
    cy.elements().remove();
    cy.add(newElements);
    cy.layout({ name: 'grid', rows: 3 }).run();
}
```

To see an example of this in action, the current setup updates the graph after 3 seconds with a new set of elements.

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file that sets up the structure of the page and includes the necessary scripts and styles.
- `styles.css`: The CSS file for styling the graph container and the page.
- `script.js`: The JavaScript file that initializes Cytoscape, defines the graph elements, and includes the function to update the graph.

## Customization

To customize the graph, you can modify the following:

- **Nodes and Edges**: Update the `elements` array in `script.js` with your own nodes and edges.
- **Styles**: Customize the appearance of nodes and edges by modifying the `style` array in `script.js`.
- **Layout**: Change the layout of the graph by updating the `layout` property in `script.js`.

For more details, refer to the [Cytoscape JS documentation](https://js.cytoscape.org/).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.
