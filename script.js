// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Function to collect employee data
const collectEmployees = function () {

  //Set up User Prompts to collect Employee Data
  const employees = [];    // Initialize an empty array to hold employees names and salary data

  while (true) {
    const firstName = prompt("Please enter the employee's first name: ");   //Collect Employee First Name
    const lastName = prompt("Please enter the employee's last name: ");     //Collect Employee Last Name
    let salary = prompt("Please enter the employee's salary: ")             //Collect Employee Salary ($)

    //Check that variable for Salary is a number
    salary = isNaN(salary) ? 0 : Number(salary);                            //If salary entered is NaN, convert it to zero for that employee entry

    //Create employee object to push to collectEmployees array
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    //Check if user would like to enter more employees or break out of the loop
    const continueAdding = confirm("Would you like to enter another employee?");
    if (!continueAdding) break; //Exit while loop if continueAdding comes back false
  }

  return employees;             //Return filled out array of employee objects
  
};

// Function to display the average salary
const displayAverageSalary = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log('No employees entered by user to calculate the average salary');
    return;
  }

  let totalSalary = 0;                    //Initialize variable to contain sum of all employee salaries
  let numEmployees = 0;                   //Initialize variable to contain number of employees

  numEmployees = employeesArray.length    //Set number of employees equal to length of employees array

  //Calculate the sum of all salaries
  for (const employees of employeesArray) {
    totalSalary += employees.salary;      //Add each iteration of employee.salary to totalSalary variable
  }

  //Calculate average salary
  const salaryAverage = totalSalary / numEmployees;

  //Display average salary to console
  console.log(`The average employee salary of our ${numEmployees} is $${salaryAverage.toFixed(2)}`);
};

// Function to select a random employee
const getRandomEmployee = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees have been entered to select from.");
    return;
  }
  
  //Generate randomizing index
  const randomIndex = Math.floor(Math.random() * employeesArray.length);    //Generating random index from employee array
  const randomEmployee = employeesArray[randomIndex];                       //Assign employee designated to random index to variable
  console.log(`Congratulations to the lucky winner, ${randomEmployee.firstName} ${randomEmployee.lastName}, for winning the drawing!`);
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
