function updateBalances() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var responsesSheet = ss.getSheetByName('Responses');
  var balancesSheet = ss.getSheetByName('Balances');

  if (!responsesSheet || !balancesSheet) {
    Logger.log("Error: Missing required sheets.");
    return;
  }

  var responses = responsesSheet.getDataRange().getValues();
  var names = balancesSheet.getRange('C2:L2').getValues()[0]; // Row of names C2 to L2
  var balancesRange = balancesSheet.getRange('C3:L12'); // Range of balances C3 to L12
  var balances = balancesRange.getValues(); // Matrix of balances

  // Initialize balances to zero
  for (var i = 0; i < balances.length; i++) {
    for (var j = 0; j < balances[i].length; j++) {
      balances[i][j] = 0;
    }
  }

  for (var i = 1; i < responses.length; i++) {
    var row = responses[i];
    var amount = parseFloat(row[3]);
    var paidBy = row[4];
    var payeesList = row[5]; // Assuming all payees are in one cell, separated by commas
    var payees = payeesList.split(',').map(function(name) { return name.trim(); }); // Split and trim names

    if (isNaN(amount)) {
      Logger.log("Error: Invalid amount '" + row[3] + "' in row " + (i + 1));
      continue;
    }

    var payerIndex = names.indexOf(paidBy);
    if (payerIndex === -1) {
      Logger.log("Error: Payer '" + paidBy + "' not found in names list.");
      continue;
    }

    var numPayees = payees.length;
    var perPerson = amount / numPayees;

    payees.forEach(function(payee) {
      if (payee) {
        var payeeIndex = names.indexOf(payee);
        if (payeeIndex === -1) {
          Logger.log("Error: Payee '" + payee + "' not found in names list.");
          return;
        }
        if (payerIndex !== payeeIndex) {
          balances[payerIndex][payeeIndex] -= perPerson;
          balances[payeeIndex][payerIndex] += perPerson;
        }
      }
    });
  }

  balancesRange.setValues(balances); // Update balances in the sheet
}

function onFormSubmit(e) {
  updateBalances();
}

function createTrigger() {
  var form = FormApp.openById('FORM-ID'); //update form ID
  ScriptApp.newTrigger('onFormSubmit')
    .forForm(form)
    .onFormSubmit()
    .create();
}
