# Read in CSV

## Overview

Just a simple function to read in a basic csv.


## Usage
```
const getCSV = require('path/to/csv.csv');
```
1. The path can be relative or absolute because it runs `path.resolve()` and the path passed in. 
1. It then reads in the file in synchronously with assuming `utf8`.
1. It then strips the BOM char on the file that if it contains one.
1. It then runs `d3-dsv.csvParse()` with no special options.
1. It will return whatever `d3-dsv.csvParse()` returns.

## Libraries

- [d3-dsv](https://d3js.org/d3-dsv/)
- [strip-bom](https://github.com/sindresorhus/strip-bom#readme)