# Write your MySQL query statement below
# SELECT a.Name AS "Employee"
# FROM Employee AS a, Employee AS b
# WHERE a.ManagerId = b.Id
# AND a.Salary > b.Salary

SELECT a.Name as "Employee"
FROM Employee AS a
JOIN Employee AS b
ON a.ManagerId = b.Id
WHERE a.Salary > b.Salary