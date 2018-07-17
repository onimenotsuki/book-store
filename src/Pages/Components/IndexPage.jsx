import React from 'react';

import BookList from './BookList'; 
import '@material/layout-grid/dist/mdc.layout-grid.min.css';

const IndexPage = () => (
  <div
    className="mdc-layout-grid"
  >
    <BookList />
  </div>
);

export default IndexPage;
