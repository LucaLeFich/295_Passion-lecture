-- docker exec -it db mysql -u root -p passion_lecture
-- SHOW VARIABLES LIKE 'secure_file_priv';


-- docker exec -it db sh -c "rm -rf /var/lib/epubs; mkdir -p /var/lib/epubs"
-- docker cp "C:\Users\pu74vys\Documents\GitHub\ReadME-C335\Doc\epubs\." db:/var/lib/epubs

INSERT INTO bookepubs (name, content, created_at, updated_at)
VALUES ('Dickens, Charles - Oliver Twist', LOAD_FILE('/var/lib/mysql-files/epubs/Dickens, Charles - Oliver Twist.epub'), NOW(), NOW());

INSERT INTO bookepubs (name, content, created_at, updated_at)
VALUES ('Doyle, Artur Conan - Sherlock Holmes', LOAD_FILE('/var/lib/mysql-files/epubs/Doyle, Artur Conan - Sherlock Holmes.epub'), NOW(), NOW());

INSERT INTO bookepubs (name, content, created_at, updated_at)
VALUES ('Dumas, Alexandre - Les trois mousquetaires', LOAD_FILE('/var/lib/mysql-files/epubs/Dumas, Alexandre - Les trois mousquetaires.epub'), NOW(), NOW());

INSERT INTO bookepubs (name, content, created_at, updated_at)
VALUES ('La Fontaine, Jean de - Fables', LOAD_FILE('/var/lib/mysql-files/epubs/La Fontaine, Jean de - Fables.epub'), NOW(), NOW());

INSERT INTO bookepubs (name, content, created_at, updated_at)
VALUES ('Verne, Jules - Le tour du monde en quatre-vingts jours', LOAD_FILE('/var/lib/mysql-files/epubs/Verne, Jules - Le tour du monde en quatre-vingts jours.epub'), NOW(), NOW());

INSERT INTO bookepubs (name, content, created_at, updated_at)
VALUES ('Dickens, Charles - A Christmas Carol', LOAD_FILE('/var/lib/mysql-files/epubs/Dickens, Charles - A Christmas Carol.epub'), NOW(), NOW());

