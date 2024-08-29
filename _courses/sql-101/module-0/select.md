---
title: SELECT Keyword
description: Accessing the data we want and need.
course: sql-101
segment: Basic Syntax
segment_id: 0
lesson: select
lesson_id: 0
---


## SQL SELECT

The `SELECT` statement is used to query the database and retrieve data that matches the criteria that you specify. The `SELECT` statement is the most commonly used statement in SQL.

A full query is a SQL **statement** that includes two essential keywords: `SELECT` and `FROM`.

`SELECT` precedes a list of columns that you want returned as part of the result set, while `FROM` is used to indicate where the data table lives. Recall the prior conversation about database design, specifically `database.schema.table`.

Let's start by taking a look at some Ethereum transactions. Now, we don't need nor want _all_ available transactions, so let's just look at 100 by applying `LIMIT 100` to the end of the statement.

```sql
SELECT 
    * 
FROM ethereum.core.fact_transactions
LIMIT 100;
```
