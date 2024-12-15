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