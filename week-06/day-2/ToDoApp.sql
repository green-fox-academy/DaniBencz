CREATE TABLE todo2(
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  isDone TINYINT NOT NULL DEFAULT 0,
  Item TEXT
);

INSERT INTO todo2 (isDone, Item) VALUES (1, 'feed the monkey');
INSERT INTO todo2 (isDone, Item) VALUES (1, 'by milk');
INSERT INTO todo2 (Item) VALUES ('do homework');
SELECT * from todo2;