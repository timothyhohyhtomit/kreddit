CREATE TABLE IF NOT EXISTS account (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL UNIQUE,
  displayed_name VARCHAR(30) DEFAULT NULL,
  avatar_id INTEGER DEFAULT NULL,
  bio VARCHAR(1000) NOT NULL DEFAULT '',
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  is_banned BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS post (
  id SERIAL PRIMARY KEY,
  owner_id INTEGER NOT NULL,
  title VARCHAR(200) NOT NULL DEFAULT 'No Title',
  content VARCHAR(5000) NOT NULL DEFAULT '',
  create_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP NOT NULL DEFAULT NOW(),
  is_archived BOOLEAN NOT NULL DEFAULT FALSE,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  is_banned BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (owner_id)
  	REFERENCES account(id)
  	ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS post_vote (
  voter_id INTEGER NOT NULL,
  post_id INTEGER NOT NULL,
  is_like BOOLEAN NOT NULL DEFAULT TRUE,
  create_at TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (voter_id, post_id),
  FOREIGN KEY (voter_id)
  	REFERENCES account(id)
    ON DELETE CASCADE,
  FOREIGN KEY (post_id)
  	REFERENCES post(id)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS post_comment (
	id SERIAL PRIMARY KEY,
  author_id INTEGER NOT NULL,
  post_id INTEGER NOT NULL,
  parent_id INTEGER NOT NULL DEFAULT -1,
  content VARCHAR(2000) NOT NULL DEFAULT '',
  create_at TIMESTAMP NOT NULL DEFAULT NOW(),
  modified_at TIMESTAMP NOT NULL DEFAULT NOW(),
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  is_banned BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (author_id)
  	REFERENCES account(id)
  	ON DELETE NO ACTION,
  FOREIGN KEY (post_id)
  	REFERENCES post(id)
  	ON DELETE CASCADE,
  FOREIGN KEY (parent_id)
  	REFERENCES post_comment(id)
  	ON DELETE CASCADE
);