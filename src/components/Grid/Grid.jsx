import React from 'react';

import './Grid.css';

const Grid = ({
  children,
  gridColumns = 'repeat(4, 1fr)',
  gridGap = '10px',
}) => {
  return (
    <div
      className="gridContainer"
      style={{ gridTemplateColumns: gridColumns, gridGap }}
    >
      {children}
    </div>
  );
};

export default Grid;
