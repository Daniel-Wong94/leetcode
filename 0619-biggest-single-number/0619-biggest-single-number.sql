# Write your MySQL query statement below
SELECT
    MAX(num) AS num
FROM
    (SELECT
        num,
        COUNT(num) AS num_count
     FROM 
        MyNumbers
     GROUP BY
        num
    ) AS temp
WHERE
    num_count = 1; 