import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom'
import SamuraiJsApp from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SamuraiJsApp  />, div)
  ReactDOM.unmountComponentAtNode((div))
});
