import React from 'react';
import Cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';
import CytoscapeComponent from 'react-cytoscapejs';

import logo from './BAI_LOGO.png';

import './App.css';

Cytoscape.use(COSEBilkent);

const layout = { name: 'cose-bilkent', idealEdgeLength: 300 };
const stylesheet = [
  {
    selector: 'node[label]',
    style: {
      label: 'data(label)',
    },
  },
  {
    selector: 'edge[label]',
    style: {
      label: 'data(label)',
      'curve-style': 'bezier',
    },
  },
];

function App() {
  // example elements
  const elements = [
    { data: { id: 'one', label: 'Node 1' } },
    { data: { id: 'two', label: 'Node 2' } },
    {
      data: {
        source: 'one',
        target: 'two',
        label: 'label for this relationship',
      },
    },
  ];

  const setListeners = (cy) => {
    // example cytoscape event listener
    cy.on('mouseover', 'edge', (event) => {
      
    });
  };


  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main>
        <CytoscapeComponent
          elements={elements}
          style={{ width: '100vw', height: '80vh' }}
          layout={layout}
          stylesheet={stylesheet}
          cy={(cy) => {
            setListeners(cy);
          }}
        />
      </main>
    </div>
  );
}

export default App;
