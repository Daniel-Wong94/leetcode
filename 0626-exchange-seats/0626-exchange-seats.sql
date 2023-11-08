# Write your MySQL query statement below
# Scenarios
# 1. id is ODD and not the last seat - swap the id by incrementing
# 2. id is ODD and IS the last seat - do not swap
# 3. id is EVEN - swap the id by decrementing
# Use subquery to gain access to the max number of seats
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