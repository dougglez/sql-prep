DROP TABLE IF EXISTS box_office;

CREATE TABLE IF NOT EXISTS box_office (
    box_office_id SERIAL PRIMARY KEY,
    movie_id INTEGER REFERENCES movies(movie_id),
    box_office_domestic INTEGER,
    box_office_international INTEGER,
    box_office_total INTEGER
);

INSERT INTO box_office (movie_id, box_office_domestic, box_office_international, box_office_total)
VALUES (1, 2, 2000000, 2000002),
(2, 78, 99, 177),
(3, 200, 150, 350),
(4, -100000, -1000000, -1100000 ),
(5, 178945, 321055, 500000),
(6, -3000000, 5000000, 2000000);