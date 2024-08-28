#CREATE DATABASE test_database;

USE test_database;

CREATE TABLE test_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT,
    email VARCHAR(255) NOT NULL
);

INSERT INTO test_table (name, age, email) VALUES
('Jonathan Garcia', 18, 'jona@gmail.com'),
('Maria Juarez', 21, 'mjuarez@gmail.com'),
('Roberto Cruz', 25, 'robertito@gmail.com');

SELECT * FROM test_table;

#DROP TABLE test_table;
