#!/usr/bin/env node

const execa = require('execa');
const glob = require('glob');
const path = require('path');

glob('./src/*.md', (err, files) => {
    files.map(file => {
        execa('pandoc', [file, '-s', '--mathjax', '-H', './assets/index.html', '--css=https://unpkg.com/bettertext.css@latest/bettertext.min.css', '-o', './site/' + path.basename(file, '.md') + '.html']).catch(e => {
            console.error(e);
            process.exit(1);
        });
    });
});
