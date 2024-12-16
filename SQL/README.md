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
WHERE condition_1 BETWEEN condition_2
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



## Resources

https://sqliteonline.com/ SQL Online IDE
https://www.programiz.com/sql/online-compiler/ Online SQL Editor
https://www.w3schools.com/sql/default.asp SQL Tutorial from w3schools