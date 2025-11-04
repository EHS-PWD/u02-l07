const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Color codes for console output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
};

// Test results tracking
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function testPassed(testName) {
  totalTests++;
  passedTests++;
  log(`✓ ${testName}`, colors.green);
}

function testFailed(testName, reason) {
  totalTests++;
  failedTests++;
  log(`✗ ${testName}`, colors.red);
  log(`  Reason: ${reason}`, colors.yellow);
}

// Main test function
function runTests() {
  log("\n=================================", colors.cyan);
  log(
    "User Registration Form - Lesson 7: Input Elements & Accessibility",
    colors.cyan
  );
  log("=================================\n", colors.cyan);

  // Test 1: Check if index.html exists
  const htmlPath = path.join(__dirname, "index.html");
  if (!fs.existsSync(htmlPath)) {
    testFailed(
      "File Existence",
      "index.html file not found in the root directory"
    );
    printSummary();
    process.exit(1);
  }
  testPassed("File Existence - index.html found");

  // Read the HTML file
  const htmlContent = fs.readFileSync(htmlPath, "utf8");
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  // Test 2: Check for DOCTYPE
  if (!htmlContent.trim().toLowerCase().startsWith("<!doctype html>")) {
    testFailed(
      "DOCTYPE Declaration",
      "HTML file must start with <!DOCTYPE html>"
    );
  } else {
    testPassed("DOCTYPE Declaration");
  }

  // Test 3: Check for <form> tag
  const form = document.querySelector("form");
  if (!form) {
    testFailed("Form Tag", "<form> tag not found in <body>");
    printSummary();
    process.exit(1);
  }
  testPassed("Form Tag");

  // Test 4: Check form attributes
  const action = form.getAttribute("action");
  const method = form.getAttribute("method");
  if (action !== "#") {
    testFailed("Form Action", 'action attribute should be "#"');
  } else if (method && method.toUpperCase() !== "POST") {
    testFailed("Form Method", 'method attribute should be "POST"');
  } else {
    testPassed('Form Attributes (action="#", method="POST")');
  }

  // Test 5: Check for First Name field
  const firstNameInput = document.querySelector("input#first-name");
  if (!firstNameInput) {
    testFailed(
      "First Name Input",
      'Input field with id="first-name" not found'
    );
  } else {
    testPassed("First Name Input - found");

    // Test 5a: Check first name attributes
    const type = firstNameInput.getAttribute("type");
    const name = firstNameInput.getAttribute("name");
    const tabindex = firstNameInput.getAttribute("tabindex");
    const required = firstNameInput.hasAttribute("required");

    if (type !== "text") {
      testFailed("First Name Type", 'type should be "text"');
    } else if (name !== "first-name") {
      testFailed("First Name Name Attribute", 'name should be "first-name"');
    } else if (tabindex !== "1") {
      testFailed("First Name Tabindex", 'tabindex should be "1"');
    } else if (!required) {
      testFailed("First Name Required", "should have required attribute");
    } else {
      testPassed('First Name Attributes (type, name, tabindex="1", required)');
    }
  }

  // Test 6: Check for First Name label with accesskey
  const firstNameLabel = document.querySelector('label[for="first-name"]');
  if (!firstNameLabel) {
    testFailed("First Name Label", "Label for first-name not found");
  } else {
    const accesskey = firstNameLabel.getAttribute("accesskey");
    if (accesskey !== "f") {
      testFailed("First Name Accesskey", 'Label should have accesskey="f"');
    } else {
      testPassed('First Name Label with accesskey="f"');
    }
  }

  // Test 7: Check for Last Name field
  const lastNameInput = document.querySelector("input#last-name");
  if (!lastNameInput) {
    testFailed("Last Name Input", 'Input field with id="last-name" not found');
  } else {
    testPassed("Last Name Input - found");

    // Test 7a: Check last name attributes
    const type = lastNameInput.getAttribute("type");
    const name = lastNameInput.getAttribute("name");
    const tabindex = lastNameInput.getAttribute("tabindex");
    const required = lastNameInput.hasAttribute("required");

    if (type !== "text") {
      testFailed("Last Name Type", 'type should be "text"');
    } else if (name !== "last-name") {
      testFailed("Last Name Name Attribute", 'name should be "last-name"');
    } else if (tabindex !== "2") {
      testFailed("Last Name Tabindex", 'tabindex should be "2"');
    } else if (!required) {
      testFailed("Last Name Required", "should have required attribute");
    } else {
      testPassed('Last Name Attributes (type, name, tabindex="2", required)');
    }
  }

  // Test 8: Check for Last Name label with accesskey
  const lastNameLabel = document.querySelector('label[for="last-name"]');
  if (!lastNameLabel) {
    testFailed("Last Name Label", "Label for last-name not found");
  } else {
    const accesskey = lastNameLabel.getAttribute("accesskey");
    if (accesskey !== "l") {
      testFailed("Last Name Accesskey", 'Label should have accesskey="l"');
    } else {
      testPassed('Last Name Label with accesskey="l"');
    }
  }

  // Test 9: Check for Email field
  const emailInput = document.querySelector("input#email");
  if (!emailInput) {
    testFailed("Email Input", 'Input field with id="email" not found');
  } else {
    testPassed("Email Input - found");

    // Test 9a: Check email attributes
    const type = emailInput.getAttribute("type");
    const name = emailInput.getAttribute("name");
    const tabindex = emailInput.getAttribute("tabindex");
    const required = emailInput.hasAttribute("required");

    if (type !== "email") {
      testFailed("Email Type", 'type should be "email"');
    } else if (name !== "email") {
      testFailed("Email Name Attribute", 'name should be "email"');
    } else if (tabindex !== "3") {
      testFailed("Email Tabindex", 'tabindex should be "3"');
    } else if (!required) {
      testFailed("Email Required", "should have required attribute");
    } else {
      testPassed(
        'Email Attributes (type="email", name, tabindex="3", required)'
      );
    }
  }

  // Test 10: Check for Email label with accesskey
  const emailLabel = document.querySelector('label[for="email"]');
  if (!emailLabel) {
    testFailed("Email Label", "Label for email not found");
  } else {
    const accesskey = emailLabel.getAttribute("accesskey");
    if (accesskey !== "e") {
      testFailed("Email Accesskey", 'Label should have accesskey="e"');
    } else {
      testPassed('Email Label with accesskey="e"');
    }
  }

  // Test 11: Check for Password field
  const passwordInput = document.querySelector("input#password");
  if (!passwordInput) {
    testFailed("Password Input", 'Input field with id="password" not found');
  } else {
    testPassed("Password Input - found");

    // Test 11a: Check password attributes
    const type = passwordInput.getAttribute("type");
    const name = passwordInput.getAttribute("name");
    const tabindex = passwordInput.getAttribute("tabindex");
    const pattern = passwordInput.getAttribute("pattern");
    const required = passwordInput.hasAttribute("required");

    if (type !== "password") {
      testFailed("Password Type", 'type should be "password"');
    } else if (name !== "password") {
      testFailed("Password Name Attribute", 'name should be "password"');
    } else if (tabindex !== "4") {
      testFailed("Password Tabindex", 'tabindex should be "4"');
    } else if (!pattern) {
      testFailed("Password Pattern", "should have pattern attribute");
    } else if (!required) {
      testFailed("Password Required", "should have required attribute");
    } else {
      testPassed(
        'Password Attributes (type, name, tabindex="4", pattern, required)'
      );
    }
  }

  // Test 12: Check for Password label with accesskey
  const passwordLabel = document.querySelector('label[for="password"]');
  if (!passwordLabel) {
    testFailed("Password Label", "Label for password not found");
  } else {
    const accesskey = passwordLabel.getAttribute("accesskey");
    if (accesskey !== "p") {
      testFailed("Password Accesskey", 'Label should have accesskey="p"');
    } else {
      testPassed('Password Label with accesskey="p"');
    }
  }

  // Test 13: Check for Confirm Password field
  const confirmPasswordInput = document.querySelector("input#confirm-password");
  if (!confirmPasswordInput) {
    testFailed(
      "Confirm Password Input",
      'Input field with id="confirm-password" not found'
    );
  } else {
    testPassed("Confirm Password Input - found");

    // Test 13a: Check confirm password attributes
    const type = confirmPasswordInput.getAttribute("type");
    const name = confirmPasswordInput.getAttribute("name");
    const tabindex = confirmPasswordInput.getAttribute("tabindex");
    const required = confirmPasswordInput.hasAttribute("required");

    if (type !== "password") {
      testFailed("Confirm Password Type", 'type should be "password"');
    } else if (name !== "confirm-password") {
      testFailed(
        "Confirm Password Name Attribute",
        'name should be "confirm-password"'
      );
    } else if (tabindex !== "5") {
      testFailed("Confirm Password Tabindex", 'tabindex should be "5"');
    } else if (!required) {
      testFailed("Confirm Password Required", "should have required attribute");
    } else {
      testPassed(
        'Confirm Password Attributes (type, name, tabindex="5", required)'
      );
    }
  }

  // Test 14: Check for Confirm Password label with accesskey
  const confirmPasswordLabel = document.querySelector(
    'label[for="confirm-password"]'
  );
  if (!confirmPasswordLabel) {
    testFailed(
      "Confirm Password Label",
      "Label for confirm-password not found"
    );
  } else {
    const accesskey = confirmPasswordLabel.getAttribute("accesskey");
    if (accesskey !== "c") {
      testFailed(
        "Confirm Password Accesskey",
        'Label should have accesskey="c"'
      );
    } else {
      testPassed('Confirm Password Label with accesskey="c"');
    }
  }

  // Test 15: Check for Submit button
  const submitButton = document.querySelector('button[type="submit"]');
  if (!submitButton) {
    testFailed("Submit Button", "Submit button not found");
  } else {
    const accesskey = submitButton.getAttribute("accesskey");
    const tabindex = submitButton.getAttribute("tabindex");

    if (accesskey !== "r") {
      testFailed(
        "Submit Button Accesskey",
        'Submit button should have accesskey="r"'
      );
    } else if (tabindex !== "6") {
      testFailed(
        "Submit Button Tabindex",
        'Submit button should have tabindex="6"'
      );
    } else {
      testPassed('Submit Button (type="submit", accesskey="r", tabindex="6")');
    }
  }

  // Test 16: Check for Reset button
  const resetButton = document.querySelector('button[type="reset"]');
  if (!resetButton) {
    testFailed("Reset Button", "Reset button not found");
  } else {
    const accesskey = resetButton.getAttribute("accesskey");
    const tabindex = resetButton.getAttribute("tabindex");

    if (accesskey !== "x") {
      testFailed(
        "Reset Button Accesskey",
        'Reset button should have accesskey="x"'
      );
    } else if (tabindex !== "7") {
      testFailed(
        "Reset Button Tabindex",
        'Reset button should have tabindex="7"'
      );
    } else {
      testPassed('Reset Button (type="reset", accesskey="x", tabindex="7")');
    }
  }

  // Test 17: Verify all labels have corresponding inputs
  const allLabels = form.querySelectorAll("label[for]");
  let allLabelsValid = true;
  allLabels.forEach((label) => {
    const forAttr = label.getAttribute("for");
    const correspondingInput = document.querySelector(`#${forAttr}`);
    if (!correspondingInput) {
      allLabelsValid = false;
    }
  });

  if (!allLabelsValid) {
    testFailed(
      "Label-Input Association",
      "Some labels do not have corresponding inputs"
    );
  } else if (allLabels.length < 5) {
    testFailed(
      "Label Count",
      "Should have at least 5 labels (first name, last name, email, password, confirm password)"
    );
  } else {
    testPassed("All Labels Associated with Inputs");
  }

  // Test 18: Check tabindex order is logical
  const elementsWithTabindex = form.querySelectorAll("[tabindex]");
  const tabindexValues = Array.from(elementsWithTabindex)
    .map((el) => parseInt(el.getAttribute("tabindex")))
    .sort((a, b) => a - b);

  const expectedOrder = [1, 2, 3, 4, 5, 6, 7];
  const isCorrectOrder =
    JSON.stringify(tabindexValues) === JSON.stringify(expectedOrder);

  if (!isCorrectOrder) {
    testFailed(
      "Tabindex Order",
      "Tabindex values should be sequential: 1, 2, 3, 4, 5, 6, 7"
    );
  } else {
    testPassed("Tabindex Order - Sequential and Logical (1-7)");
  }

  // Print summary
  printSummary();

  // Exit with appropriate code
  process.exit(failedTests > 0 ? 1 : 0);
}

function printSummary() {
  log("\n=================================", colors.cyan);
  log("Test Summary", colors.cyan);
  log("=================================", colors.cyan);
  log(`Total Tests: ${totalTests}`);
  log(`Passed: ${passedTests}`, colors.green);
  log(`Failed: ${failedTests}`, failedTests > 0 ? colors.red : colors.reset);

  if (failedTests === 0) {
    log("\n🎉 All tests passed! Great job on accessibility!", colors.green);
  } else {
    log(
      "\n⚠️  Some tests failed. Please review the errors above.",
      colors.yellow
    );
  }
  log("");
}

// Run the tests
runTests();
