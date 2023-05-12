# Write your MySQL query statement below
# Join the table to itself, alias it, and make the comparisons with DATEDIFF
SELECT Weather.id as Id from Weather
JOIN Weather w 
ON DATEDIFF(Weather.recordDate, w.recordDate) = 1
AND Weather.Temperature > w.Temperature;