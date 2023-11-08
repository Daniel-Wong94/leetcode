# Write your MySQL query statement below
SELECT 
    (CASE
        WHEN MOD(id, 2) != 0 AND max_seats != id THEN id + 1 # Odd id and not last seat
        WHEN MOD(id, 2) != 0 AND max_seats = id THEN id      # Odd id and IS last seat 
        ELSE id - 1                                          # Even id, take the previous id
     END) as id,
     student                                                 # no need to swap student name
FROM
    seat,
    (SELECT
        MAX(id) AS max_seats
    FROM
        Seat) as seat_counts
ORDER BY
    id