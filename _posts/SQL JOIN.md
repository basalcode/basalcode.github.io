1. Left Outer Join

    SELECT <select_list>

    FROM TableA AS a

    LEFT JOIN TableB AS b

    ON a.key = b.key;

2. Right Outer Join

    SELECT <select_list>

    FROM TableA AS a

    RIGHT JOIN TableB AS b

    ON a.key = b.key;

3. Inner Join

    SELECT <select_list>

    FROM TableA AS a

    INNER JOIN TableB AS b

    ON a.key = b.key

4. Left-semi Join

    SELECT <select_list>

    FROM TableA AS a

    LEFT JOIN TableB AS b

    ON a.key = b.key

    WHERE b.key IS NULL;

5. Right-semi Join

    SELECT <select_list>

    FROM TableA AS a

    RIGHT JOIN TableB AS b

    ON a.key = b.key

    WHERE a.key IS NULL;

6. Full Join

    SELECT <select_list>

    FROM TableA AS a

    FULL OUTER JOIN TableB AS b

    ON a.key = b.key;

7. Outer Join

    SELECT <select_list>

    FROM TableA AS a

    FULL OUTER JOIN TableB AS b

    ON a.key = b.key

    WHERE a.key IS NULL

    OR b.key IS NULL;