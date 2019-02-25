module.exports = function getCSV(courseCsvFile) {
    const stripBOM = require('strip-bom');
    const dsv = require('d3-dsv');
    const path = require('path');
    const fs = require('fs');
    //resolve the path the user puts in
    courseCsvFile = path.resolve(courseCsvFile);
    //read it in and remove the potential BOM and then parse with DSV 
    var csvCourseData = dsv.csvParse(stripBOM(fs.readFileSync(courseCsvFile, 'utf8')));

    return csvCourseData;
}