# Write your MySQL query statement below
SELECT
    (CASE
        WHEN MOD(id, 2) != 0 AND id != max_seat THEN id + 1
        WHEN MOD(id, 2) != 0 AND id = max_seat THEN id
        ELSE id - 1
    END) as id,
    student
FROM
    Seat,
    (SELECT
        MAX(id) as max_seat
    FROM
        Seat) as seat_count
ORDER BY
    id