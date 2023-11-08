# Write your MySQL query statement below
# Get moving average of amount in 7 day window (current day + 6)
#   - round it to two decimal places (ROUND(,2))
# Use a sliding window, when id is 7, get avg
# when id > 7, subtract id - 7 and add id

SELECT
    a.visited_on AS visited_on,
    SUM(b.day_sum) AS amount,
    ROUND(AVG(b.day_sum), 2) AS average_amount
FROM
    (SELECT visited_on,SUM(amount) AS day_sum
    FROM Customer
    GROUP BY visited_on) AS a,
    (SELECT visited_on, SUM(amount) AS day_sum
    FROM Customer
    GROUP BY visited_on) AS b
WHERE
    DATEDIFF(a.visited_on, b.visited_on) BETWEEN 0 AND 6 # inclusive
GROUP BY
    a.visited_on
HAVING
    COUNT(b.visited_on) = 7 # to ensure we start our avg on day 7