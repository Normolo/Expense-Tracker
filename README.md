# Expense Tracker

Expense Tracker is a Google Apps Script for efficiently tracking shared expenses among a group of friends, family, or colleagues. It utilizes Google Sheets and Google Forms to log expenses and update balances in real-time.

## Overview

Expense Tracker simplifies the process of managing shared expenses within a group. It automates the calculation of balances, providing transparency and ensuring fairness in financial transactions.

## Features

- **Real-time Balance Calculation:** Balances are automatically updated whenever a form submission is made, ensuring that members have up-to-date information on their financial transactions.
- **Clear Visualization:** The balances table provides a clear overview of who owes money to whom within the group, facilitating easy tracking and resolution of outstanding debts.
- **Seamless Integration:** The script seamlessly integrates with Google Sheets and Google Forms, making it accessible and easy to use for all group members.

## Usage

### Setup

1. **Create Google Sheets and Google Form:**
   - Create a new Google Sheet to store the balances table and form responses.
   - Design a Google Form for logging expenses, including fields for amount, payer, and payees.

2. **Deploy the Script:**
   - Open the Script Editor in your Google Sheet.
   - Copy the provided Google Apps Script code (from `expense_tracker.gs`) into the Script Editor.
   - Save the script and close the Script Editor.

3. **Set Up Form Submission Triggers:**
   - In the Script Editor, go to `Edit > Current project's triggers`.
   - Click on the "Add Trigger" button.
   - Select the `onFormSubmit` function to run on form submission events.
   - Choose "From form" in the event source dropdown and select your Google Form.
   - Save the trigger configuration.

### Tracking Expenses

1. **Share the Google Form:**
   - Share the Google Form with all members of your group.
   - Each member can access the form to log their expenses.

2. **Log Expenses:**
   - Members should fill out the form with details of their expenses, including the amount, payer, and selected payees.

3. **View Balances:**
   - The balances table in the Google Sheet will be automatically updated after each form submission.
   - Members can view their current balances in the sheet to keep track of who owes money to whom.

## License

This project is licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

You are free to:

- **Share:** Copy and redistribute the material in any medium or format.
- **Adapt:** Remix, transform, and build upon the material for any purpose, even commercially.

Under the following terms:

- **Attribution:** You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

