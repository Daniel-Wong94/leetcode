# Write your MySQL query statement below
SELECT current.Id
FROM Weather AS current
JOIN Weather AS previous
ON previous.RecordDate = SUBDATE(current.RecordDate, INTERVAL 1 DAY)
WHERE current.temperature > previous.temperature