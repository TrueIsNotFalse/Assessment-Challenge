import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-roboto';
import { pdfjs } from 'react-pdf';

// pdfjs package to open and render pdf documents
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

ReactDOM.render(<App />, document.getElementById('root'));

// reload every component when saved
if (module.hot) module.hot.accept();
