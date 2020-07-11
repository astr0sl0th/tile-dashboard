# React Dashboard Tiles
[![Netlify Status](https://api.netlify.com/api/v1/badges/362a6601-b7e7-4675-8728-3f0bb36c6498/deploy-status)](https://app.netlify.com/sites/dashboard-tiles/deploys)

### React Dashboard Tiles using [CSSGrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) to accomplish a windows tile like effect. View the [demo](https://dashboard-tiles.netlify.app/)

[Demo](https://css-grid-tile-react-dashboard.netlify.app/)

## Features

- Custom backgrounds for each grid item both color and image
- Set the amount of grid columns
- Define the how much each tile should take up
- Set the grid gap

## Magic involved

The trick to the full screen background per tile is due to wonderful css property `background attachment: 'fixed'` this allows the background image or color to extend over selected rows/columns. I know crazy right 😝
