const XLSX = require('xlsx');

try {
    console.log("Reading CSV file...");
    const workbook = XLSX.readFile('test-results.csv', { type: 'file' });

    console.log("Writing to Excel file...");
    try {
        XLSX.writeFile(workbook, 'test-results.xlsx');
        console.log("Successfully created test-results.xlsx");
    } catch (writeError) {
        if (writeError.code === 'EBUSY') {
            const fallback = 'test-results-updated.xlsx';
            console.log(`File locked. Writing to ${fallback} instead...`);
            XLSX.writeFile(workbook, fallback);
            console.log(`Successfully created ${fallback}`);
        } else {
            throw writeError;
        }
    }
} catch (error) {
    console.error("Error converting file:", error.message);
}
