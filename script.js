// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employees = []; // Step 1: Initialize an empty array

  while (true) { // Step 2: Start the while loop
    const firstName = prompt("Enter the employee's first name:"); // Step 3: Get first name
    const lastName = prompt("Enter the employee's last name:"); // Step 3: Get last name
    let salary = prompt("Enter the employee's salary:"); // Step 3: Get salary

    // Validate salary input
    salary = isNaN(salary) ? 0 : Number(salary); // Step 4: Validate and convert salary

    // Create an employee object and add it to the array
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    // Ask user if they want to continue
    const addMore = confirm("Do you want to add another employee?"); // Step 6
    if (!addMore) break; // Exit loop if user chooses to cancel
  }

  return employees; // Step 7: Return the array of employee objects
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // Step 1: Check if the array is empty
  if (employeesArray.length === 0) {
    console.log("No employees to calculate the average salary.");
    return;
  }

  let totalSalary = 0; // Step 2: Initialize total salary

  // Step 2: Sum the salaries
  for (const employee of employeesArray) {
    totalSalary += employee.salary; // Accumulate the salary
  }

  // Step 3: Calculate the average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Step 4: Log the average salary with two decimal places
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // Step 1: Check if the array is empty
  if (employeesArray.length === 0) {
    console.log("No employees to select from.");
    return;
  }

  // Step 2: Generate a random index
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Step 3: Access the random employee
  const selectedEmployee = employeesArray[randomIndex];

  // Step 4: Log the employee's full name
  console.log(`Congratulations to ${selectedEmployee.firstName} ${selectedEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
