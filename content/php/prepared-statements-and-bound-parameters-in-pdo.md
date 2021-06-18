---
title: Prepared Statements and Bound Parameters
date: 2021-06-18 17:09:00
slug: prepared-statements-and-bound-parameters-in-pdo
image: '/images/php/prepared-statements-and-bound-parameters-in-pdo.png'
tags: ['php', 'prepared', 'pdo']
instagram: "https://www.instagram.com/p/CQQyIpZjAyk/?utm_source=ig_web_copy_link"
summery: "A prepared statement is a feature used to execute the same (or similar) SQL statements repeatedly with high efficiency."
description: "A prepared statement is a feature used to execute the same (or similar) SQL statements repeatedly with high efficiency.
<br><br>
Prepared statements basically work like this:
<ol class='list-inside list-disc mt-2 text-gray-600'>
<li class='text-sm'>Prepare: An SQL statement template is created and sent to the database. Certain values are left unspecified, called parameters (labeled \"?\"). Example: INSERT INTO MyGuests VALUES(?, ?, ?)</li>
<li class='text-sm'>The database parses, compiles, and performs query optimization on the SQL statement template, and stores the result without executing it</li>
<li class='text-sm'>Execute: At a later time, the application binds the values to the parameters, and the database executes the statement. The application may execute the statement as many times as it wants with different values</li>
</ol>
"
---
