# Write your MySQL query statement below
SELECT
    Register.contest_id,
    ROUND(COUNT(Register.user_id) * 100 / (SELECT COUNT(user_id) FROM USERS), 2) as 'percentage'
FROM
    Register
GROUP BY
    Register.contest_id
ORDER BY
    percentage DESC, Register.contest_id