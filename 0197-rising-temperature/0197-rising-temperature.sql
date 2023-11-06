# Write your MySQL query statement below
SELECT Weather.Id
FROM Weather
JOIN Weather AS w
ON w.RecordDate = SUBDATE(Weather.RecordDate, INTERVAL 1 DAY)
WHERE Weather.temperature > w.temperature