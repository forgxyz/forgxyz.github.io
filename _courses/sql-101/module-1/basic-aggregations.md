---
title: Aggregations Part 1
description: Introducing aggregations in SQL.
course: sql-101
segment: Title TBD
segment_id: 1
lesson: basic-aggregations
lesson_id: 0
---

## COUNT

To get the number of records, we can use `COUNT()` and pass in a column name. If we want just distinct records, we can simply add `DISTINCT` to the function.&#x20;

{% capture hint_content %}
Run the below query with and without `DISTINCT`, do we get the same number of transactions? What about with `ez_nft_sales`?
{% endcapture %}
{% include hint.html type="success" title="Try it and compare" content=hint_content %}

```sql
SELECT 
    COUNT(DISTINCT tx_hash) AS unique_transactions
FROM ethereum.core.ez_dex_swaps
WHERE block_timestamp::date BETWEEN '2022-06-01' AND '2022-06-30'
  AND pool_name IN
      (
        'ENS-WETH LP',
    	'USDC-ENS LP',
        'WETH-ENS LP'
      );
```


## SUM

Let's move on from dex swaps and look at NFTs and the `ethereum.core.ez_nft_sales` table.

`SUM()` allows us to pass in a numeric column and total up all records over the result set. In this case, we are summing up the OpenSea platform fees in token and USD amounts over the month of June.

```sql
SELECT 
    SUM(platform_fee) AS total_platform_fee,
    SUM(platform_fee_usd) AS total_platform_fees_usd
FROM ethereum.core.ez_nft_sales
WHERE block_timestamp::DATE BETWEEN '2022-06-01' AND '2022-06-30'
    AND platform_name = 'opensea';
```

{% capture hint_content %}
Ok so we have around $12mm in USD and.... a massive number for native token fees. Why is this? We should check the [table documentation](https://flipsidecrypto.github.io/ethereum-models/#!/model/model.ethereum_models.nft__ez_nft_sales) for the `total_platform_fee` column to see what we're working with in here.

Is there anything that leads us to question our data or change approach?

We may want to dive deeper into the data.

We can see from the documentation that the column _is_ decimal adjusted, so it's not that. There's a hint in there, though, the words: "in the transaction's currency" ...

So, a strong analytical process would lead us to checking what currencies are listed in OpenSea sales.

```sql
SELECT
    DISTINCT currency_symbol
FROM ethereum.core.ez_nft_sales
WHERE platform_name = 'opensea';
```

What is returned here and how might that change our query?

```sql
SELECT 
    SUM(platform_fee) AS total_platform_fee,
    SUM(platform_fee_usd) AS total_platform_fees_usd
FROM ethereum.core.ez_nft_sales
WHERE block_timestamp BETWEEN '2022-06-01' AND '2022-06-30'
    AND platform_name = 'opensea'
    AND currency_symbol = 'ETH';
```

{% endcapture %}
{% include hint.html type="warning" title="Dive Deeper" content=hint_content %}

## Metrics: AVG, MIN, MAX, MEDIAN

SQL can also easily calculate some basic metrics over a result set, like the average, min and max.

```sql
SELECT 
    SUM(platform_fee) AS total_platform_fee,
    AVG(platform_fee) AS avg_platform_fee,
    MEDIAN(platform_fee) AS median_platform_fee,
    MIN(platform_fee) AS min_platform_fee,
    MAX(platform_fee) AS max_platform_fee
FROM ethereum.core.ez_nft_sales
WHERE block_timestamp::DATE BETWEEN '2022-06-01' AND '2022-06-30'
    AND platform_name = 'opensea'
    AND currency_symbol = 'ETH';
```
