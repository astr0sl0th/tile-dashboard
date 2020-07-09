import React from 'react';

import './GridItem.css';

const GridItem = ({
  gridColumn,
  tileBg = 'grey',
  titleBgImg = 'url(https://i.ibb.co/dBLbrRV/bg1.jpg)',
  children,
}) => {
  return (
    <div
      className="gridItem"
      style={{
        gridColumn: gridColumn,
        background: titleBgImg ? titleBgImg : tileBg,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {children}
    </div>
  );
};

export default GridItem;
