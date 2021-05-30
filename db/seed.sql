DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    deptId INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(20)
);

CREATE TABLE roles (
    roleId INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(20),
    salary DECIMAL(),
    dmentId INTEGER,
    FOREIGN KEY(dmentId) REFERENCES department(deptId)
);

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    rolesId INTEGER,
    managerId INTEGER,
    FOREIGN KEY(rolesId) REFERENCES roles(roleId),
    FOREIGN KEY(managerId) REFERENCES employee(id)
);

INSERT INTO department (department_name) values ('');

INSERT INTO roles (title, ) values ('');

INSERT INTO employee (first_name, last_name, roleId) values ('', '', '');
