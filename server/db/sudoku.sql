CREATE TABLE IF NOT EXISTS problem (
  id SERIAL PRIMARY KEY,
  difficulty INTEGER NOT NULL DEFAULT 1,
  grid CHAR(81) NOT NULL DEFAULT REPEAT('x', 81)
);