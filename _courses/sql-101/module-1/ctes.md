---
title: Common Table Expressions (CTEs)
description: Introducing CTEs in SQL.
course: sql-101
segment: Title TBD
segment_id: 1
lesson: cte
lesson_id: 2
---

Sometimes we need data in multiple formats, will need to use it multiple times and in different way or we need to get data from somewhere, based on a table elsewhere. We can create a temporary _view_ within our query with a CTE.

Think of the CTE as a query in and of itself where a result set is returned. We can see exactly what this result would be if we were to highlight and run the query between the parenteses (if you do, **add a limit** or you will be waiting for a lot of records for a long time).

This result set can be thought of as a table that exists only while the query is running. Thus, we can `SELECT FROM` the CTE using whatever name we choose as its alias, in the below case `opensea_sales`.

```sql
WITH
opensea_sales AS (
    SELECT
        *
    FROM ethereum.core.ez_nft_sales
    WHERE block_timestamp::DATE BETWEEN '2022-06-01' AND '2022-06-30'
        AND platform_name = 'opensea'
)
SELECT
    DATE_TRUNC('day', block_timestamp) as _date,
    CASE
  	WHEN currency_symbol = 'ETH' THEN 'ETH'
  	WHEN currency_symbol = 'WETH' THEN 'WETH'
  	WHEN currency_symbol = 'USDC' THEN 'USDC'
  	ELSE 'Other'
    END AS currency_symbol,
    SUM(platform_fee) AS total_platform_fee,
    SUM(platform_fee_usd) AS total_platform_fees_usd
FROM opensea_sales
GROUP BY 1, 2
ORDER BY 1, 4 DESC;
```


{% capture hint_content %}
There's a lot of structure and syntax to keep track of, right?

CTEs begin with the keyword `WITH`. This is only necessary to start the sequency of CTEs, each subsequent CTE simply follows `<alias> as (<query>)`.

The only other thing to remember is that each is comma separated, so:
```sql
WITH
<alias> as ( SELECT statement ),
<alias_2> as ( SELECT statement_2 ),
...
<alias_n> as ( SELECT statement_n )
SELECT * FROM <alias_n>
```

Notice how we have a final `SELECT` outside any CTE. This is a must! This is the last query that will return your ultimate result set.
{% endcapture %}
{% include hint.html type="info" title="Structure" content=hint_content %}

CTE Example 2: Bringing in outside data from the prices table.

Let's continue with the OpenSea fee analysis and compare the price of ETH against OpenSea fee revenue.

```sql
WITH prices AS (
    SELECT
        date_trunc('day', hour) AS _date,
        AVG(price) AS avg_price_usd
    FROM ethereum.core.fact_hourly_token_prices
    WHERE _date BETWEEN '2022-01-01' AND '2022-06-30'
        AND symbol = 'WETH'
    GROUP BY 1
),
openfee AS (
    SELECT 
        DATE_TRUNC('day', block_timestamp) AS _date,
        SUM(platform_fee) AS total_platform_fee,
        SUM(platform_fee_usd) AS total_platform_fees_usd
    FROM ethereum.core.ez_nft_sales
    WHERE block_timestamp::DATE BETWEEN '2022-01-01' AND '2022-06-30'
        AND platform_name = 'opensea'
    GROUP BY 1
)
SELECT
    o._date,
    o.total_platform_fees_usd,
    p.avg_price_usd
FROM openfee o
    LEFT JOIN prices p USING (_date)
ORDER BY 1, 3 DESC
```

We are able to bring the data from these CTEs together in the final query using a `JOIN`. If you are unfamilair with how these work, just scroll down!

But, while we're in the CTE section, 1 more thing to add. Yes, data from a CTE can be joined in a subsequent CTE. In the above example, we query and aggregate OpenSea fee data in the `openfee` CTE. However, this could have still been parceled out in 2 steps, like in the first CTE example, where a first CTE selects the transaction records (`opensea_sales` 2 code blocks up) and the `openfee` aggregation could be a subsequent CTE that selects from `opensea_sales` instead of from `ez_nft_sales`.

### Dive Deeper

{% include link-card.html url="https://www.geeksforgeeks.org/cte-in-sql/" %}

{% include link-card.html url="https://chartio.com/resources/tutorials/using-common-table-expressions/" %}
