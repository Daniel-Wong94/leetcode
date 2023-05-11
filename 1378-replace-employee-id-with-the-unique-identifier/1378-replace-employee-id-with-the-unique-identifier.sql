# Write your MySQL query statement below
SELECT name, unique_id FROM Employees
LEFT JOIN EmployeeUNI
ON Employees.id = EmployeeUNI.id
# Left join: returns everything from left table (Employees) and joins 
# the rows on the right table (EmployeeUNI) that matches ON id