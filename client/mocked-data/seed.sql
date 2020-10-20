TRUNCATE TABLE pasajeros, equipaje;

INSERT INTO pasajeros (id,name) VALUES (1,'Tom Hanks');
INSERT INTO pasajeros (id,name) VALUES (2,'Beyonce');
INSERT INTO pasajeros (id,name) VALUES (3,'Justin Bieber');
INSERT INTO pasajeros (id,name) VALUES (4,'Ash Ketchum');
INSERT INTO pasajeros (id,name) VALUES (5,'E.T.');
INSERT INTO pasajeros (id,name) VALUES (6,'William Shakespeare');
INSERT INTO pasajeros (id,name) VALUES (7,'Grace Hopper');
INSERT INTO pasajeros (id,name) VALUES (8,'Kanye West');
INSERT INTO pasajeros (id,name) VALUES (9,'Taylor Swift');

INSERT INTO equipaje (pasajeros_id, tipo) VALUES ((SELECT id from pasajeros where name='Grace Hopper'),'It''s easier to ask forgiveness than it is to get permission.');
INSERT INTO equipaje (pasajeros_id, tipo) VALUES ((SELECT id from pasajeros where name='William Shakespeare'),'to.be or to.not.be, that is the question.');
INSERT INTO equipaje (pasajeros_id, tipo) VALUES ((SELECT id from pasajeros where name='Beyonce'),'If you liked it then you should have put a Promise on it.');
INSERT INTO equipaje (pasajeros_id, tipo) VALUES ((SELECT id from pasajeros where name='Tom Hanks'),'Life is like an array of chocolates.');
INSERT INTO equipaje (pasajeros_id, tipo) VALUES ((SELECT id from pasajeros where name='Justin Bieber'),'Is it too late now to say sorry? Cuz I''m missing more than just your <body></body>.');
INSERT INTO equipaje (pasajeros_id, tipo) VALUES ((SELECT id from pasajeros where name='Ash Ketchum'),'char mander, I choose you!');
INSERT INTO equipaje (pasajeros_id, tipo) VALUES ((SELECT id from pasajeros where name='E.T.'),'E.T. Slack Home.');
INSERT INTO equipaje (pasajeros_id, tipo) VALUES ((SELECT id from pasajeros where name='Taylor Swift'),'I knew you were trouble when you logged in.');
INSERT INTO equipaje (pasajeros_id, tipo) VALUES ((SELECT id from pasajeros where name='Taylor Swift'),'I''ve got some whitespace baby — and I''ll write your `.id,name`');
INSERT INTO equipaje (pasajeros_id, tipo) VALUES ((SELECT id from pasajeros where name='Kanye West'),'I think what Kanye West is going to mean is something similar to what Steve Jobs means.');
