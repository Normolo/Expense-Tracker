function calculateAndWriteValues() {
  // Get the active spreadsheet and the specific sheet you want to work with
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Define the range for row 9 (C9 to M9)
  var startColumn = 3;  // C is the 3rd column
  var endColumn = 13;   // M is the 13th column
  var row = 9;
  
  // Iterate through each cell in the range C9 to M9
  for (var column = startColumn; column <= endColumn; column++) {
    // Get the value of the cell in row 9
    var cellValue = sheet.getRange(row, column).getValue();
    
    // Calculate 10% of the cell value
    var tenPercentValue = cellValue * 0.1;
    
    // Determine the value to write in row 10
    var writeValue = tenPercentValue < 4.38 ? tenPercentValue : 4.38;
    
    // Write the value to the corresponding cell in row 10
    sheet.getRange(row + 1, column).setValue(writeValue);
  }
}
