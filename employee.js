const mysql = require('mysql2');

// create the connection to database
//const mysql = require('mysql');
const inquirer = require('inquirer');
//create connection:
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Shilohjonezz194',
    database: 'employee_db'
});

// create MySQL global variables that use MYSQL to Join together.
const employeesByAll = '';
const departmentsAll = '';
const rolesAll = '';
const employeesEverything = '';

// connection
connection.connect((err) => {
    if (err) throw err;
    console.log("Welcome to HR Management system")
    mainMenu()
})


// Create main menu
const mainMenu = () => {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            "View All Employees",
            "View All Roles",
            "View All Departments",
            "Add Employee",
            "Add Role",
            "Add Department",
            "Remove Employee",
            "Update Employee Role",
            "Exit",
        ],
    }).then(option => {
        console.log(option)
        switch (option.action) {
            case "View All Employees":
                viewEmployees();
                break;
            case "View All Roles":
                viewRoles();
                break;
            case "View All Departments":
                viewDepartments();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Remove Employee":
                delEmployee();
            // case "Update Employee Role":
            //     updateEmployeeRole();
            //     break;


            default:
                console.log("See you next time!!")
                connection.end()
                process.exit(0)
        }
    })
    //then.add connections to all of the choices above^^
}

// function View Employee

const viewEmployees = () => {
    console.log("View Employees")
    connection.query("SELECT * FROM EMPLOYEE;", function (err, data) {
        if (err) throw err;
        console.table(data);
        mainMenu()
    })
}
const viewRoles = () => {
    console.log("View Roles")
    connection.query("SELECT * FROM ROLES;", function (err, data) {
        if (err) throw err;
        console.table(data);
        mainMenu()
    })
}
const viewDepartments = () => {
    console.log("View Departments")
    connection.query("SELECT * FROM DEPARTMENT;", function (err, data) {
        if (err) throw err;
        console.table(data);
        mainMenu()
    })
}

//function for Adding Employee
const addEmployee = () => {
    console.log('Adding Employee');
    connection.query(
        'SELECT id, first_name, last_name FROM employee',
        (err, res) => {
            if (err) throw err;
        }
    )
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Please enter first name of new employee',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Please enter the last name of new employee',
        },
        {
            type: 'list',
            name: 'titleId',
            message: 'Please choose the title for new employee',
            choices: ['IT Manager', 'Sales Manager', 'Executive'],
        },
        {
            type: 'list',
            name: 'managerId',
            message: 'Who do they report to?',
            choices: ["Executive huh? You're kind of a big deal!"],
        },
    ]).then(options => {
        connection.query(`INSERT into EMPLOYEE (first_name, last_name, rolesId, managerId) 
        VALUES (?, ?, ?, ?)` , [options.first_name, options.last_name, options.titleId, options.managerId],
            (err, res) => {
                if (err) throw err;
                console.table('Employee added successfully! ')
                mainMenu()
            })
        //         INSERT INTO Customers (CustomerName, City, Country)
        // VALUES ('Cardinal', 'Stavanger', 'Norway');
    })
};
//function add Department
const addDepartment = () => {
    console.log('Adding department');
    inquirer.prompt([
        {
            type: 'input',
            name: 'dept_name',
            message: 'Please enter the name of Department: ',
            validate: (response) =>
                response === ''

        },

    ])
};
//function add role/job title
const addTitle = () => {
    console.log('Adding Title');
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "Please enter the name of their Title",
            choices: ["Lawyer", "SuperHero", "Engineer", "School Teacher"],
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please enter the salary for new Employee',
            //validate response, if/else/ return
        },
    ])
}
//Function to remove/Delete employee if mistake was made:
const delEmployee = () => {
    connection.promise().query("SELECT * FROM employee", (err, res) => {
        if (err) throw err;
        return res
    }).then(Employees => {
        console.log(employees);
    })
    viewEmployees()
    inquirer.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Choose employee',
            choices: []
        },
    ])
    .then(({ }) => {
        connection.query(
            (err) => {
                if (err) throw err;
                console.log('Employee Deleted!');
                mainMenu()
            }
        )
    })
}
// Function to update Employee role/title
const updateTitle = () => {
    console.log('Updating Employee Title');
    inquirer.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Please choose an Employee',
            choices: ['choice A', 'B', 'C', 'Exit'],
        },
        {
            type: 'list',
            name: 'rolesId',
            message: 'Please choose a new job title',
            choices: ['choice A', 'B', 'C', 'Exit'],
        },
    ])
    //.then Update response
} //update Employee Manager:
const updateMnger = () => {
    console.log("Updating Employee Manager");
    inquirer.prompt([
        {

        },
    ])
}
