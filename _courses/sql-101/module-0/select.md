---
title: SQL Statements
description: Accessing the data we want and need.
course: sql-101
segment: Basic Syntax
segment_id: 0
lesson: select
lesson_id: 0
---


## SELECT

The `SELECT` statement is used to query the database and retrieve data that matches the criteria that you specify. The `SELECT` statement is the most commonly used statement in SQL.

A full query is a SQL **statement** that includes two essential keywords: `SELECT` and `FROM`.

`SELECT` precedes a list of columns that you want returned as part of the result set, while `FROM` is used to indicate where the data table lives in the following identifying order: `DATABASE.SCHEMA.TABLE`.

Let's start by taking a look at some Ethereum transactions. Now, we don't need nor want _all_ available transactions, so let's just look at 100 by applying `LIMIT 100` to the end of the statement.

```sql
SELECT 
    * 
FROM ethereum.core.fact_transactions
LIMIT 100;
```

{% capture hint_content %}
Star (`*`) is a special character that means all columns, while the semi-colon `;` terminates the statement.
{% endcapture %}
{% include hint.html type="info" title="A Note On *" content=hint_content %}

We can single out just the data we want by explicitly stating the column names:

```sql
SELECT 
  block_timestamp,
  tx_hash,
  from_address,
  tx_fee
FROM ethereum.core.fact_transactions
LIMIT 100;
```

As a `SELECT` statement returns a result set, we can only run one `SELECT` statement at a time. It is possible to query data from multiple tables and return that in a single result set, but we'll touch on that later.

{% capture hint_content %}
Finally, a note on `LIMIT`. Users should always limit their result set when querying granular data (individual transactions or blocks). In general, we do this to see the format of particular transactions or to see how a table is constructed. As we often just need a few records as examples, a limit significantly reduces the waiting time for these results.
{% endcapture %}
{% include hint.html type="success" title="Utilize samples, not the whole set!" content=hint_content %}

## Dive Deeper

{% include link-card.html url="https://www.w3schools.com/sql/sql_syntax.asp" title="SQL Syntax" %}

{% include link-card.html url="https://mode.com/sql-tutorial/sql-select-statement/" title="SQL Select Statement" %}

{% include link-card.html url="https://mode.com/sql-tutorial/sql-limit/" title="SQL Limit" %}
