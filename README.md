Folder Structure:

arrSolution.js
objSolution.js
README.md
sorted-names-list.txt
unsorted-names-list.txt

Description:

arrSolution.js -  solution where list sorted by last names through iterating elements of array

objSolution.js - solution where list sorted by last names where actual last name is a key of object: 
{ Alvarez: 'Marin', Archer: 'Adonis Jzlius',  ...} 
This solution doesn't work, because keys must be uniqe, but names are not uniqe. So the better way is to create array of objects, where every object can have keys: id, first name and last name, and values - their actual name and last name. And get values in sortered way.
For ex: arrayOfObj[0] = {id: 1, firstName: 'Beau Tristan', lasName: 'Bentley'}


The Goal: Name Sorter
Build a name sorter. Given a set of names, order that set first by last name, then by any given names the person may have. A name must have at least 1 given name and may have up to 3 given names.

Example Usage

Given a a file called unsorted-names-list.txt containing the following list of names;

Janet Parsons
Vaughn Lewis
Adonis Julius Archer
Shelby Nathan Yoder
Marin Alvarez
London Lindsey
Beau Tristan Bentley
Leo Gardner
Hunter Uriah Mathew Clarke
Mikayla Lopez
Frankie Conner Ritter

Executing the program in the following way;

name-sorter ./unsorted-names-list.txt

Should result the sorted names to screen;

Marin Alvarez
Adonis Julius Archer
Beau Tristan Bentley
Hunter Uriah Mathew Clarke
Leo Gardner
Vaughn Lewis
London Lindsey
Mikayla Lopez
Janet Parsons
Frankie Conner Ritter
Shelby Nathan Yoder

and a file in the working directory called sorted-names-list.txt containing the sorted names.

Assessment Criteria

We will execute your submission against a list with a thousand names.
Your submission must meet the following criteria.
The solution should be available for review on github.
The names should be sorted correctly.
It should print the sorted list of names to screen.
It should write/overwrite the sorted list of names to a file called sorted-names-list.txt.
Unit tests should exist.
Minimal, practical documentation should exist.

Awesome, but not essential criteria

Create a build pipeline like Travis or AppVeyor that execute build and test steps.