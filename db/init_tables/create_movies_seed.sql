DROP TABLE IF EXISTS movies CASCADE;

CREATE TABLE IF NOT EXISTS movies (
    movie_id SERIAL PRIMARY KEY,
    movie_name TEXT,
    movie_genre VARCHAR(45),
    mpaa_rating VARCHAR(5),
    critic_rating INTEGER
);

INSERT INTO movies (movie_name, movie_genre, mpaa_rating, critic_rating)
VALUES ('Jaws', 'Suspense', 'PG', 97),
('Team Americe: World Police', 'Comedy', 'R', 73),
('Jurassic World', 'Action', 'PG-13', 71),
('The Last Face', 'Romance', 'R', 5),
('Troll 2', 'Comedy', 'PG-13', 6),
('The Ringer', 'Comedy', 'PG-13', 40);