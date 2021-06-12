-- SQLite
-- CREATE TABLE users(

--     id INTEGER PRIMARY KEY,
--     username VARCHAR NOT NULL UNIQUE,
--     password VARCHAR NOT NULL,
--     avatar BLOB,
--     created_at CURRENT_TIMESTAMP

-- );

-- CREATE TABLE notes(

--     id INTEGER PRIMARY KEY,
--     author VARCHAR NOT NULL,
--     title VARCHAR NOT NULL,
--     body LONGVARCHAR NOT NULL,
--     image BLOB,
--     created_at CURRENT_TIMESTAMP

-- );

-- TAMBAH DATA KE TABLE USERS
-- INSERT INTO users(username, password, avatar, created_at) VALUES(
--     "alif",
--     "1qazxsw2",
--     "data:image/png;base64, skldjfklsjdaflkjsadflkj",
--     "2021-07-13"
-- );

-- TAMBAH DATA KE TABLE NOTE
INSERT INTO notes(author, title, body, image, created_at) VALUES(

    "selva",
    "ini adalah catatan selva",
    "ini adalah body selva",
    "data:image/png;base64, skldjfklsjdaflkjsadflkj",
    "2021-07-13"

);