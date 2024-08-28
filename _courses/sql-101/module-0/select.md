---
title: SELECT Keyword
course: sql-101
segment: Basic Syntax
segment_id: 0
lesson: select
lesson_id: 0
---


# SELECT Keyword

The `SELECT` statement is used to query the database and retrieve data that matches the criteria that you specify. The `SELECT` statement is the most commonly used statement in SQL.

The basic syntax of the `SELECT` statement is as follows:

```sql
SELECT column1, column2, ...
FROM table_name;
```

In the above syntax, `column1`, `column2`, etc. are the names of the columns that you want to retrieve data from, and `table_name` is the name of the table that contains the data.

For example, to retrieve all the data from the `employees` table, you would use the following `SELECT` statement:

```sql
SELECT *
FROM employees;
```

In the above example, the `*` is a wildcard character that is used to select all columns from the table. You can also specify individual columns that you want to retrieve data from, like this:

```sql
SELECT first_name, last_name
FROM employees;
```
