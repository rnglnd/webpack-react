import React from 'react';
import { render } from 'react-dom';
import '../css/main.css';

const Index = () => (
  <div>hello</div>
);

export default Index;

const div = document.createElement('div');
document.body.appendChild(div);

render(<Index />, div);
