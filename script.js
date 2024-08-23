// test codding
document.addEventListener('DOMContentLoaded', function () {
    var cy = cytoscape({
        container: document.getElementById('cy'),
        
        elements: [
            { data: { id: 'a' } },
            { data: { id: 'b' } },
            { data: { id: 'c' } },
            { data: { id: 'd' } },
            { data: { id: 'e' } },
            { data: { source: 'a', target: 'b' } },
            { data: { source: 'a', target: 'c' } },
            { data: { source: 'b', target: 'd' } },
            { data: { source: 'c', target: 'e' } }
        ],
        style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#666',
                    'label': 'data(id)',
                    'text-valign': 'center',
                    'color': '#fff',
                    'text-outline-width': 2,
                    'text-outline-color': '#666'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle'
                }
            }
        ],
        layout: {
            name: 'grid',
            rows: 3
        }
    });

    // Example function to update graph data
    function updateGraph(newElements) {
        cy.elements().remove();
        cy.add(newElements);
        cy.layout({ name: 'grid', rows: 3 }).run();
    }

    // Example of updating the graph after 3 seconds
    setTimeout(function() {
        var newElements = [
            { data: { id: 'a' } },
            { data: { id: 'x' } },
            { data: { id: 'y' } },
            { data: { source: 'x', target: 'y' } },
            { data: { source: 'a', target: 'x' } }
        ];
        updateGraph(newElements);
    }, 3000);
});
