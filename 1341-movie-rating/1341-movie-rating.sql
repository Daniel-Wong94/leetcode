# Write your MySQL query statement below
# 1. Get the name of user who has rated the most number of movies
#   - If tie number, return the lexicographically smaller name (ORDER BY)
# 2. Get the movie name with highest avg rating in Feb 2020
#   - If tie, return the lexicographically smaller name (ORDER BY)
# Use a union for the two separate queries

(SELECT
   u.name AS results
FROM
    MovieRating r
LEFT JOIN
    Users u
ON
     r.user_id = u.user_id
GROUP BY
    r.user_id
ORDER BY
    COUNT(r.movie_id) DESC, u.name
LIMIT 1)
UNION ALL
(SELECT
    m.title AS results
FROM
    MovieRating r
LEFT JOIN
    Movies m
ON
    r.movie_id = m.movie_id
WHERE
    LEFT(r.created_at, 7) = "2020-02"
GROUP BY
    r.movie_id
ORDER BY
    AVG(r.rating) DESC, m.title
LIMIT 1)