DROP TABLE IF EXISTS actors;

CREATE TABLE IF NOT EXISTS actors (
    actor_id SERIAL PRIMARY KEY,
    actor_name TEXT,
    actor_age INTEGER,
    main_movie INTEGER REFERENCES movies(movie_id)
);

INSERT INTO actors (actor_name, actor_age, main_movie)
VALUES ('Roy Scheider', 34, 1),
('Trey Parker', 16, 2),
('Chris Pratt', 35, 3),
('Charlize Theron', 42, 4),
('Michael Paul Stevenson', 76, 5),
('Johnny Knoxville', 46, 6);