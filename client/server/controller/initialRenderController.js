import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../../src/App.js';

const initialRenderController = (req, res, next) => {
  console.log(path.resolve());
  fs.readFile(
    path.resolve('../client/build/index.html'),
    'utf8',
    (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
      }
      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
        )
      );
    }
  );
};

export default initialRenderController;
