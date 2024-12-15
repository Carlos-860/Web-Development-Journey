# SQL Tutorial

A standard language (Structured Query Language) to store manipulate and retrieve data in databases

Exmaple of relational database management systems (RDBMS) : MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, IBM DB2

Database objects are also referred to tables.

Table is then a collection of releated data entries.

Data entries consist of columns/fields and rows/records.

SQL keywords are NOT case senstive.

### How to Select all records/rows from a table?

```sql
SELECT * FROM FROM *table_name*;
```

### How to Select specific columns/fields from a table?

```sql
SELECT *column_1*, *column_2* FROM *table_name*
```

### How to Select distinct values from a table?

```sql
SELECT DISTINCT *column_1* FROM *table_name* -- Returns a list of distinct values
```

### How to select and count the value of all distinct values from a table?

```sql
SELECT COUNT(DISTINCT *column_1*) FROM *table_name* -- Returns an integer value
```

