# SQL Tutorial

A standard language (Structured Query Language) to store manipulate and retrieve data in databases

Exmaple of relational database management systems (RDBMS) : MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, IBM DB2

Database objects are also referred to tables.

Table is then a collection of releated data entries.

Data entries consist of columns/fields and rows/records.

SQL keywords are NOT case senstive.



### How to Select all records/rows from a table?

```sql
SELECT * FROM table_name;
```

### How to Select specific columns/fields from a table?

```sql
SELECT column_1, column_2, ...
FROM table_name
```

### How to Select distinct values from a table?

```sql
SELECT DISTINCT column_1 
FROM table_name -- Returns a list of distinct values
```

### How to Select and count the value of all distinct values from a table?

```sql
SELECT COUNT(DISTINCT column_1) 
FROM table_name -- Returns an integer value
```

### How to Filter records from a table?

```sql
SELECT *
FROM table_name 
WHERE condition
```

### How to Check if a record/row values fall between a range?

```sql
SELECT *
FROM table_name
WHERE column_name BETWEEN value1 AND value2
```

### How to Check if a record/row value matches specific values in a list?

```sql
SELECT * 
FROM table_name
WHERE column_1 IN ('value_1', 'value_2', '...')
```

### How to sort records from a table?

```sql
SELECT *
FROM table_name
ORDER BY column_1, column_2, ... ASC|DESC
```

### How to Filter records based on multiple conditions (all conditions must be true)?

```sql
SELECT *
FROM table_name
WHERE condition_1 AND condition_2 ...
```

### How to Filter records based on multiple conditions (at least one condition must be true)?

```sql
SELECT *
FROM table_name
WHERE condition_1 OR condition_2 ...
```

### How to Select records based off opposite result (negative result)?

```sql
SELECT *
FROM table_name
WHERE NOT condition
```

### How to Insert records into a table?

```sql
INSERT INTO table_name
VALUES ('value_1', 'value_2', '...')
```

### How to Insert multiple records into a table?

```sql
INSERT INTO table_name
VALUES ('value_1', 'value_2', '...'),
VALUES ('value_1', 'value_2', '...'),
VALUES ('value_1', 'value_2', '...')
```

### How to Select all values in a table based off values being null?

```sql
SELECT (column_1, column_2, ...)
FROM table_name
WHERE colummn_name IS NULL
```
### How to Select all values in a table based off values not being null?

```sql
SELECT (column_1, column_2, ...)
FROM table_name
WHERE colummn_name IS NOT NULL
```

### How to Update existing record in a table?

```sql
UPDATE table_name
SET column_1 = value_1, column_2 = value_2, ...
WHERE condition
```

### How to Delete existing record in a table?

```sql
DELETE FROM table_name
WHERE condition
```

### How to Delete all records in table?

```sql
DELETE FROM table_name
```

### How to Delete a table?

```sql
DROP Table table_name
```

### How to Select the Top 1000 records from a table?

```sql
SELECT TOP number|percent column_name(s) 
FROM table_name
WHERE condition; -- SQL Server Syntax
```

```sql
SELECT column_name(s) 
FROM table_name
WHERE condition 
LIMIT number; -- MySQL Syntax
```

## SQL Aggregate Functions

### How to Select the minumum value based on a selected column in a table?

```sql
SELECT MIN(column_name)
FROM table_name
WHERE condition;
```

### How to Select the maximum value based on a selected column in a table?

```sql
SELECT MAX(column_name)
FROM table_name
WHERE condition;
```

### How to ensure the returned column has a descriptive name (Alias)?

```sql
SELECT MIN(clomun_name) AS [alias_name]
FROM table_name;
```

### How to return the minumum value based on a category?

```sql
SELECT MIN(column_name)
FROM table_name
GROUP BY column_name;
```

### How to return the maximum value based on a category?

```sql
SELECT MAX(column_name)
FROM table_name
GROUP BY column_name;
```

### How to return the number of rows that match a specifed condition?

```sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
```

```sql
SELECT COUNT(*)
FROM table_name
WHERE condition;
```

### How to return the number of rows that match a specified condition ignoring duplicates?

```sql
SELECT COUNT (DISTINCT column_name)
FROM table_name;
```

### How to return the number of rows based on a category?

```sql
SELECT COUNT(column_name), column_name...
FROM table_name
GROUP BY column_name;
```

### How to return the sum of a numeric column?

```sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;
```

### How to return the sum of a numeric column based on a category?

```sql
SELECT SUM(column_name), column_name...
FROM table_name
GROUP BY column_name
```

### How to return the average value of a numeric column?

```sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;
```

### How to return the average value of a numeric column based on a category?

```sql
SELECT AVG(column_name), column_name...
FROM table_name
GROUP BY column_name
```

### How to select all rows where the column value starts with specified pattern?

```sql
SELECT column1,column2, ...
FROM table_name
WHERE columnN LIKE pattern
```


## Resources

https://sqliteonline.com/ SQL Online IDE
https://www.programiz.com/sql/online-compiler/ Online SQL Editor
https://www.w3schools.com/sql/default.asp SQL Tutorial from w3schools

Youtube videos
MYSQL Tutorial - https://www.youtube.com/playlist?list=PLZPZq0r_RZOMskz6MdsMOgxzheIyjo-BZ
