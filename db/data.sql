INSERT INTO department (department_name) values ('IT');
INSERT INTO department (department_name) values ('Sales');
INSERT INTO department (department_name) values ('Management');

SELECT * FROM DEPARTMENT;

INSERT INTO roles (title, salary, dmentId) values ('IT Manager', 12000, 1);
INSERT INTO roles (title, salary, dmentId) values ('Sales Manager', 120000, 2);
INSERT INTO roles (title, salary, dmentId) values ('Executive', 320000, 3);

SELECT * FROM ROLES;

INSERT INTO employee (first_name, last_name, rolesId,managerId) values ('Luke', 'Jones', 2, NULL);
INSERT INTO employee (first_name, last_name, rolesId, managerId) values ('Becca', 'Jones', 1, NULL);
INSERT INTO employee (first_name, last_name, rolesId, managerId) values ('DAkota', 'Jones', 3, NULL);

SELECT * FROM EMPLOYEE;