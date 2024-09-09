---
title: Joins
description: Using JOIN to combine data from multiple sources.
course: sql-101
segment: Title TBD
segment_id: 1
lesson: joins
lesson_id: 3
---

So we just introduced something wholly new - working with data from multiple sources (tables). How did we combine the disparate result sets into one? That happens with line 25, above, where we reference `LEFT JOIN x USING (y)`.

{% capture hint_content %}
You may also be used to `LEFT JOIN x ON a.y = b.y`, the keyword `USING` is supported by Snowflake and is a bit more streamlined to use _when both columns use the same name or alias._
{% endcapture %}
{% include hint.html type="info" title="Snowflake Syntax Tip" content=hint_content %}

Here we are joining on a common date, but you can take data from a wide variety of columns

* Maybe in `ez_dex_swaps` we join on
  * pool name / contract
  * token name / contract
  * origin from address - we can compare the activity from an address across dex swaps and nft sales!
* Or if we're working with raw transaction data and need some labels, an analyst can use data from other tables to enhance the outcome
  * `dim_dex_liquidity_pools`
  * `dim_contracts`&#x20;
  * `dim_hourly_token_prices`

There are a number of types of joins, but the most common one you'll likely use for now is a `LEFT JOIN`.

### LEFT JOIN

In this join, the left table is the one referenced first. In the below example, `ez_dex_swaps` is left and `dim_hourly_token_prices` is right.

```sql
SELECT
    <columns>
FROM ethereum.core.ez_dex_swaps
    LEFT JOIN ethereum.core.dim_hourly_token_prices ON <common column>
```

Declaring the type of join is effectively deciding what data overlap you want to keep. In a `LEFT JOIN` we are preserving **all rows** in the left table, and only joining overlaps from the right table.

The below tool does the best job, that I have found so far, at demonstrating what happens with data from two sources when they are joined together using different methods.

{% include link-card.html url="https://joins.spathon.com/" title="Visual JOIN Aid" %}

### Joining on Multiple Columns

You can join tables using many columns! An example of this might be `date` and `address`. We developed an example on this in the video where it might make sense to track NFT mints and subsequent sales by joining the `ez_nft_mints` and `ez_nft_sales` columns on both date and nft contract address.

```sql
WITH 
sales AS (
  SELECT 
      date_trunc('d', block_timestamp) AS _date,
      nft_address,
      SUM(price) AS total_eth_sale
  FROM ethereum.core.ez_nft_sales
  WHERE block_timestamp > CURRENT_DATE - 30
  GROUP BY 1, 2
),
mints AS (
  SELECT
      date_trunc('d', block_timestamp) AS _date,
      nft_address,
      SUM(mint_price_eth) AS total_eth_mint
  FROM ethereum.core.ez_nft_mints
  WHERE block_timestamp > CURRENT_DATE - 30
  GROUP BY 1,2
)

SELECT
    m._date, -- _date exists in both CTEs so we explicitly declare m._date
    m.nft_address,
    m.total_eth_mint,
    s.total_eth_sale
FROM mints m -- here we alias the mints CTE as just m for simplicity
  LEFT JOIN sales s
    ON m._date=s._date AND m.nft_address=s.nft_address
ORDER BY 1, 3 DESC
```

**What's happening in this query?**

1. On lines `2-10` we declare the first CTE that aggregates NFT sales over the past 30 days, from `ez_nft_sales`.
2. Our second CTE on lines `11-19` queries the `ez_nft_mints` table, aggregating total ETH minted per NFT drop in the past 30 days
3. The final query in lines `21-29` combines the data from each of these with `mints` as the **left** table.

Recall from the [visual join reference](https://joins.spathon.com/) that everything in the left table is preserved, while only matching overlaps from the right table are brought into our final dataset. So, in plain terms, what we are doing here is taking all NFT mints in the past 30 days, and by joining on date and nft address, we are including subsequent secondary market sales _for just those addresses in the mint column_.

### Dive Deeper

{% include link-card.html url="https://mode.com/sql-tutorial/sql-joins/" title="SQL Joins" %}
