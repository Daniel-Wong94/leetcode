# Write your MySQL query statement below
SELECT
    class
FROM
    (SELECT
        class,
        COUNT(student) AS num_students
     FROM
        Courses
     GROUP BY
        class
    ) AS temp_table
WHERE
   num_students >= 5
