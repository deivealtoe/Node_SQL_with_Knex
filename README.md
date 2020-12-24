### Creating my Postgres container (Docker)

#### Getting the latest Postgres image

```
docker pull postgres
```

#### Creating the container

```
docker run --name sql_com_knex -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

#### Get inside the container

```
docker exec -it _container_id_ bash
```

#### Login at postgres

```
psql -U postgres
```

### At postgres

```
\l -- List all databases created

\c ??? -- Connect to a database

\dt -- List all tables of the database conected

CREATE DATABASE ???

CREATE TABLE user (
  id SERIAL UNIQUE,
  name TEXT NOT NULL
);

CREATE TABLE projects (
  id SERIAL UNIQUE,
  user_id INTEGER REFERENCES users(id),
  title TEXT NOT NULL
);

SELECT * FROM projects JOIN users ON projects.user_id = users.id;
```
