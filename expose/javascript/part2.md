1. 3 because that is the value of i by the end of the for loop and var types have function scope
2. 150 this is the discounted price of the third item in the array and var types have function scope
3. 150 this is the final price of the third item in the array and var types have function scope
4. [50, 100, 150] as it was pushed in that order
5. error, let has block scope and the console log is outside the for loop
6. error, discountedPrice is a let type which has block scope and is within the for loop
7. 150, this is because finalPrice is a let type but it is scoped within the function and updated throught the loop
8. [50, 100, 150] is logged because it is the array created by the loop, and there is no error because it is the return and declared within the scope of the function
9. error, i has a let tpye and line 11 is out of it's scope
10. 3, it's a const type declared as the length of the array.
11. [50, 100, 150], throught each iteration of the for loop a new element is added to the array and it still returns because const arrays can still be modified
12. 
A. student.name 
B. student["Grad Year"] 
C. student.greeting() 
D. student['Favorite Teacher'].name 
E. student.courseLoad[0]
13. 
A. '32': although 2 is an integer converted to a string and appended to '3' 
B. 1: the string '3' was converted to an integer and 2 was subtracted from 3
C. 3: the null value was converted to an integer 0 and added to 3
D. '3null': null was written as a string and then appended to 3 
E. 4: true was converted into its integer representation of 1 and added to 3
F: 0: false became its integer value of 0 and added to null's integer value of 0
G. '3undefined': undefined was converted to a string and appended to '3'
H. NaN: this is due to undefined being converted to its integer form of NaN and subtracted from 3 and is NaN due to NaN not being a number and can't be added or subrtacted from an integer
14. 
A. true: 2 was converted into an integer and is greater than 1
B. False: '2' is after '12' lexicographically meaning it is greater
C. True: '2' was converted to an integer and is equal to 2
D. False: 2 is different than '2'
E. False: true was converted to its integer value of 1 and is not 2
F. True: true is equal to boolean(2) as that value is also true
15. == converts each argument to the same type if they are different but === does not and returns false if they are not the same
17. 2,4,6: this is because we are using doSomething as our call back where for each value of the array being iterrated through we are multiplying it's value by 2 and then appending it to a new empty array that was declared before entering the for loop. 
19. 1 4 3 2: this is because 1 and 4 would be outputted first then we would go in order of the setTimeouts which would be 3, then 2 as it is at a greater value of a 1000ms delay. 