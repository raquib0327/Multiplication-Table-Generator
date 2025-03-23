// document.addEventListener("DOMContentLoaded", function () {
//   // Get DOM elements
//   const numberInput = document.getElementById("numberInput");
//   const generateBtn = document.getElementById("generateBtn");
//   const errorElement = document.getElementById("error");
//   const tableOutput = document.getElementById("tableOutput");

//   // Add event listener to the button
//   generateBtn.addEventListener("click", generateMultiplicationTable);

//   // Also generate table when Enter key is pressed in input field
//   numberInput.addEventListener("keyup", function (event) {
//     if (event.key === "Enter") {
//       generateMultiplicationTable();
//     }
//   });

//   // Focus the input field when page loads
//   numberInput.focus();

//   function generateMultiplicationTable() {
//     // Clear previous error messages and output
//     errorElement.textContent = "";
//     tableOutput.innerHTML = "";

//     // Get the input value
//     const inputValue = numberInput.value.trim();

//     // Check if input is empty
//     if (inputValue === "") {
//       errorElement.textContent = "Please enter a valid number!";
//       return;
//     }

//     // Parse the input to a number
//     const number = parseFloat(inputValue);

//     // Check if input is a valid number
//     if (isNaN(number)) {
//       errorElement.textContent = "Please enter a valid number!";
//       return;
//     }

//     // Check if number is greater than 0
//     if (number <= 0) {
//       errorElement.textContent = "Please enter a number greater than 0!";
//       return;
//     }

//     // Create multiplication table
//     createTable(number);
//   }

//   function createTable(number) {
//     // Create heading
//     const heading = document.createElement("h3");
//     heading.textContent = `Multiplication Table for ${number}`;
//     heading.style.textAlign = "center";
//     heading.style.marginBottom = "15px";
//     heading.style.color = "#4a55a2";

//     // Create table
//     const table = document.createElement("table");
//     table.classList.add("multiplication-table");

//     // Create table header
//     const thead = document.createElement("thead");
//     const headerRow = document.createElement("tr");

//     const emptyHeader = document.createElement("th");
//     emptyHeader.textContent = "x";
//     headerRow.appendChild(emptyHeader);

//     const valueHeader = document.createElement("th");
//     valueHeader.textContent = number;
//     headerRow.appendChild(valueHeader);

//     thead.appendChild(headerRow);
//     table.appendChild(thead);

//     // Create table body
//     const tbody = document.createElement("tbody");

//     for (let i = 1; i <= 10; i++) {
//       const row = document.createElement("tr");

//       const multiplierCell = document.createElement("td");
//       multiplierCell.textContent = i;
//       multiplierCell.style.fontWeight = "bold";
//       row.appendChild(multiplierCell);

//       const resultCell = document.createElement("td");
//       resultCell.textContent = (i * number).toFixed(number % 1 === 0 ? 0 : 2);
//       row.appendChild(resultCell);

//       tbody.appendChild(row);
//     }

//     table.appendChild(tbody);

//     // Add animation effect
//     table.style.opacity = "0";
//     table.style.transform = "translateY(20px)";
//     table.style.transition = "opacity 0.5s ease, transform 0.5s ease";

//     // Append elements to output container
//     tableOutput.appendChild(heading);
//     tableOutput.appendChild(table);

//     // Trigger animation
//     setTimeout(() => {
//       table.style.opacity = "1";
//       table.style.transform = "translateY(0)";
//     }, 50);
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const numberInput = document.getElementById("numberInput");
  const generateBtn = document.getElementById("generateBtn");
  const errorElement = document.getElementById("error");
  const tableOutput = document.getElementById("tableOutput");

  // Add event listener to the button
  generateBtn.addEventListener("click", generateMultiplicationTable);

  // Also generate table when Enter key is pressed in input field
  numberInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      generateMultiplicationTable();
    }
  });

  // Focus the input field when page loads
  numberInput.focus();

  function generateMultiplicationTable() {
    // Clear previous error messages and output
    errorElement.textContent = "";
    tableOutput.innerHTML = "";

    // Get the input value
    const inputValue = numberInput.value.trim();

    // Check if input is empty
    if (inputValue === "") {
      errorElement.textContent = "Please enter a valid number!";
      return;
    }

    // Parse the input to a number
    const number = parseFloat(inputValue);

    // Check if input is a valid number
    if (isNaN(number)) {
      errorElement.textContent = "Please enter a valid number!";
      return;
    }

    // Check if number is greater than 0
    if (number <= 0) {
      errorElement.textContent = "Please enter a number greater than 0!";
      return;
    }

    // Create multiplication table
    createTable(number);
  }

  function createTable(number) {
    // Create heading
    const heading = document.createElement("h3");
    heading.textContent = `Multiplication Table for ${number}`;
    heading.style.textAlign = "center";
    heading.style.marginBottom = "15px";
    heading.style.color = "#4a55a2";

    // Create table
    const table = document.createElement("table");
    table.classList.add("multiplication-table");

    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const multiplicationHeader = document.createElement("th");
    multiplicationHeader.textContent = "Multiplication";
    headerRow.appendChild(multiplicationHeader);

    const resultHeader = document.createElement("th");
    resultHeader.textContent = "Result";
    headerRow.appendChild(resultHeader);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");

    for (let i = 1; i <= 10; i++) {
      const row = document.createElement("tr");

      const multiplicationCell = document.createElement("td");
      multiplicationCell.textContent = `${number} × ${i}`;
      multiplicationCell.style.textAlign = "center";
      row.appendChild(multiplicationCell);

      const resultCell = document.createElement("td");
      resultCell.textContent = (i * number).toFixed(number % 1 === 0 ? 0 : 2);
      resultCell.style.textAlign = "center";
      row.appendChild(resultCell);

      tbody.appendChild(row);
    }

    table.appendChild(tbody);

    // Add animation effect
    table.style.opacity = "0";
    table.style.transform = "translateY(20px)";
    table.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    // Append elements to output container
    tableOutput.appendChild(heading);
    tableOutput.appendChild(table);

    // Trigger animation
    setTimeout(() => {
      table.style.opacity = "1";
      table.style.transform = "translateY(0)";
    }, 50);
  }
});
