import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';

// const titlu = React.createElement(
//   'h1',
//   {className: 'oClasa', title: 'Tooltip de la Paul'},
//   'Hello from React',
//   React.createElement('sup', null, '2')
// );

// const titlu = <h1 className="altaClasa" title="Agian">Hello from JSX<sup>2</sup></h1>;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// React.createElement(StrictMode, {});
