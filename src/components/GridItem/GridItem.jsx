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
        // if no image use color
        background: titleBgImg ? titleBgImg : tileBg,
        // needs inlining due too how the CSS props work
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {children}
    </div>
  );
};

export default GridItem;
