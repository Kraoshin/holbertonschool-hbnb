chmod a+x 10-main.py 
vim 10-add.py
./10-main.py 
chmod a+x 10-add.py 
ls
git status -s
rm -r __pycache__/
rm 10-main.py 
git add 10-add.py 
git commit -m "function that adds two integers and returns the result."
git push
ls
vim 11-main.py
vim 11-pow.py
ls
chmod a+x *11-
chmod a+x 11-main.py 11-pow.py 
ls
./11-main.py 
ls
rm 11-main.py 
git status -s
git add 11-pow.py 
git commit -m "function that computes a to the power of b and return the value"
git push
vim 12-main.py
vim 12-fizzbuzz.py
chmod a+x 12-main.py 
./12-main.py 
rm 12-main.py 
ls
chmod a+x 12-fizzbuzz.py 
pycodestyle --first *.py
git status- s
git status -s
git add 12-fizzbuzz.py 
git commit -m "fizzbuzz"
git push
rm -r __pycache__/
ls
./1-last_digit.py 
pycodestyle 1-last_digit.py 
pycodestyle --first 1-last_digit.py 
vim 1-last_digit.py 
pycodestyle --first 1-last_digit.py 
ls
./1-last_digit.py 
git add 1-last_digit.py 
git commit -m "tried another way of coding the exercise"
vim 2-print_alphabet.py 
pycodestyle --first 2-print_alphabet.py 
./2-print_alphabet.py 
git status- s
git status -s
git add 2-print_alphabet.py 
git commit -m " program that prints the ASCII alphabet, in lowercase, not followed by a new line."
git push
ls
vim 3-print_alphabt.py
chmod a+x 3-print_alphabt.py 
./3-print_alphabt.py 
pycodestyle --first 3-print_alphabt.py 
git add 3-print_alphabt.py 
git commit -m "program that prints the ASCII alphabet, in lowercase, not followed by a new line"
git push
los
ls
vim 6-print_comb3.py 
./6-print_comb3.py 
pycodestyle --first 6-print_comb3.py 
vim 6-print_comb3.py 
pycodestyle 6-print_comb3.py 
pycodestyle --first 6-print_comb3.py 
./6-print_comb3.py 
git add 6-print_comb3.py 
git commit -m "now concatenate the 2nd number into the first number *10"
git push
git status -s
git push
cd ..
ls
mkdir python-import_modules
cd python-import_modules/
vim add_0.py
vim 0-add.py
vim README.md
chmod a+x 0-add.py 
./0-add.py 
vim 0-import_add.py
python3 0-import_add.py 
ls 
rm 0-import_add.py add_0.py 
ls
git status -s
rm -r __pycache__/
git add .
git commit -m "create readme and a program that imports the function def add(a, b): from the file add_0.py and prints the result of the addition 1 + 2 = 3"
git push
vim 1-calculation.py
pycodestyle --first 1-calculation.py 
pycodestyle --first 0-add.py 
chmod a+x 1-calculation.py 
vim calculator_1.py
./1-calculation.py 
ls
rm calculator_1.py 
git status -s
git add 1-calculation.py 
git commit -m "program that imports functions from the file calculator_1.py, does some Maths, and prints the result."
vim 2-args.py
chmod a+x 2-args.py 
./2-args.py 
./2-args.py hello world 
./2-args.py hello
pycodestyle --first 2-args.py 
ls
git status -s
git add 2-args.py 
git commit -m "program that prints the number of and the list of its arguments."
git push
vim 3-infinite_add.py
chmod a+x 3-infinite_add.py 
./3-infinite_add.py 12 16 52
/3-infinite_add.py 1111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222222223435467866765443534434222222254444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555666666666666666666666666666666777777777777777777777777777777888888888888888888888888888888899999999999999999999999990000000000000000000 11111111111111111111111111111111111111111111111111222222222222222222222222222333333333333333333334567788888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
11111111111111111111111111111111111111111111111111222222222222222222222222222333333333333333333334568900000011111111111111111111111111111111111111111111111111112222222222222222222222222222222222223435467866765443534434222222254444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555666666666666666666666666666666777777777777777777777777777777888888888888888888888888888888899999999999999999999999989999999999999999999
./3-infinite_add.py 1111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222222223435467866765443534434222222254444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555666666666666666666666666666666777777777777777777777777777777888888888888888888888888888888899999999999999999999999990000000000000000000 11111111111111111111111111111111111111111111111111222222222222222222222222222333333333333333333334567788888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
11111111111111111111111111111111111111111111111111222222222222222222222222222333333333333333333334568900000011111111111111111111111111111111111111111111111111112222222222222222222222222222222222223435467866765443534434222222254444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555666666666666666666666666666666777777777777777777777777777777888888888888888888888888888888899999999999999999999999989999999999999999999
ls
./3-infinite_add.py 1111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222222223435467866765443534434222222254444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555666666666666666666666666666666777777777777777777777777777777888888888888888888888888888888899999999999999999999999990000000000000000000 11111111111111111111111111111111111111111111111111222222222222222222222222222333333333333333333334567788888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
11111111111111111111111111111111111111111111111111222222222222222222222222222333333333333333333334568900000011111111111111111111111111111111111111111111111111112222222222222222222222222222222222223435467866765443534434222222254444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555666666666666666666666666666666777777777777777777777777777777888888888888888888888888888888899999999999999999999999989999999999999999999
./3-infinite_add.py 1 62 52
vim 3-infinite_add.py 
./3-infinite_add.py 1111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222222223435467866765443534434222222254444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555666666666666666666666666666666777777777777777777777777777777888888888888888888888888888888899999999999999999999999990000000000000000000 11111111111111111111111111111111111111111111111111222222222222222222222222222333333333333333333334567788888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
git status -s 
git add 3-infinite_add.py 
git commit -m "program that prints the result of the addition of all arguments"
git push
vim variable_load_5.py
vim 5-variable_load.py
pycodestyle --first 5-variable_load.py 
chmod a+x 5-variable_load.py 
./5-variable_load.py 
ls
rm variable_load_5.py __pycache__/
ls
rm -r variable_load_5.py __pycache__/
rm -r __pycache__/
ls
git status -s
git add 5-variable_load.py 
git commit -m " program that imports the variable a from the file variable_load_5.py and prints its value."
git push
cat 5-variable_load.py 
cat 3-infinite_add.py 
cat 2-args.py 
cat 1-calculation.py 
cat 0-add.py 
code .
ls
cd holbertonschool-higher_level_programming/
ls
mkdir python-data_structures
cd python-data_structures/
ls
cd ..
cd
ls
cd holbertonschool-higher_level_programming/
git pull
git status -s
cd python-data_structures/
/usr/bin/python3 /home/kraoshin/holbertonschool-higher_level_programming/python-data_structures/8-main.py
ls
cd holbertonschool-higher_level_programming/
cd python-data_structures/
ls
chmod a+x 8-multiple_returns.py 8-main.py 
ls
git add 8-multiple_returns.py 
git commit -m "function that returns a tuple with the length of a string and its first character."
./8-main.py 
chmod a+x 9-max_integer.py 9-main.py 
ls
./9-main.py 
git add 9-max_integer.py 
git commit -m " function that finds the biggest integer of a list."
chmod a+x 10-divisible_by_2.py 10-main.py 
./10-main.py 
ls
cd holbertonschool-higher_level_programming/
ls
cd python-data_structures/
git status -s
pwd
cd holbertonschool-higher_level_programming/python-data_structures/
ls
git status -s
./10-divisible_by_2.py 
./10-main.py 
git add 10-divisible_by_2.py 
git commit -m "function that finds all multiples of 2 in a list."
git push
chmod a+x 11-main.py 
./11-main.py 
chmod a+x 11-delete_at.py 
./11-main.py 
git add 11-delete_at.py 
git commit -m "function that deletes the item at a specific position in a list."
ls
chmod a+x 12-switch.py 
./12-switch.py 
pycodestyle --first *.py
git add 12-switch.py 
git commit -m "function that switch the value of two var"
git push
cd ..
ls
mkdir python-more_data_structures
cd python-more_data_structures/
ls
cd ..
ls
cd python-data_structures/
ls
pwd
cd ..
cd python-more_data_structures/
ls
cd..
ls
cd ..
ls
rm -r python-more-data_structures/
git status -s
cd python-more_data_structures/
ls
chmod a+x 0-main.py 0-square_matrix_simple.py 
ls
cd ..
cd python-data_structures/
ls
rm *main.py
rm -r __pycache__/
ls
git status -s
rm 0-square_matrix_simple.py 
cd ..
cd python-more_data_structures/
ls
git add README.md 0-main.py 0-square_matrix_simple.py 
git commit -m "create README and a function that computes the square value of all integers of a matrix"
rm 0-main.py 
git add 0-main.py 
git commit -m "delete main from git"
git push
git status -s
chmod
chmod a+x 1-main.py 1-search_replace.py 
./1-main.py 
git add 1-search_replace.py 
git commit -m "function that replaces all occurrences of an element by another in a new list."
chmod a+x 2-uniq_add.py 2-main.py 
./2-main.py 
git status -s
git add 2-uniq_add.py 
git commit -m "function that adds all unique integers in a list (only once for each integer)."
chmod a+x 3-main.py 3-common_elements.py 
./3-main.py 
git status -s
git add 3-common_elements.py 
git commit -m "function that returns a set of common elements in two sets."
chmod a+x 4-main.py 4-only_diff_elements.py 
./4-main.py 
git add 4-only_diff_elements.py 
git commit -m "function that returns a set of all elements present in only one set."
git status -s
chmod a+x 5-main.py 5-number_keys.py 
./5-main.py 
chmod a+x 6-main.py 6-print_sorted_dictionary.py 
./6-main.py 
git add 6-print_sorted_dictionary.py 
git commit -m "function that prints a dictionary by ordered keys."
ls
chmod a+x 7-main.py 7-update_dictionary.py 
./7-main.py 
ls
git add 7-update_dictionary.py 
git commit -m "function that replaces or adds key/value in a dictionary."
chmod a+x 8-main.py 8-simple_delete.py 
./8-main.py 
git add 8-simple_delete.py 
git commit -m "function that deletes a key in a dictionary."
chmod a+x 9-main.py 9-multiply_by_2.py 
./9-main.py 
git add 9-multiply_by_2.py 
git commit -m "function that returns a new dictionary with all values multiplied by 2"
cmod a+x 10-best_score.py 10-main.py 
chmod a+x 10-best_score.py 10-main.py 
./10-main.py 
git add 10-best_score.py 
git commit -m "function that returns a key with the biggest integer value."
git status -s
chmod a+x 11-main.py 11-multiply_list_map.py 
./11-main.py 
git add 11-multiply_list_map.py 
git commit -m "function that returns a list with all values multiplied by a number without using any loops."
chmod a+x 12-roman_to_int.py 12-main.py 
./12-main.py 
git add 12-roman_to_int.py 
git commit -m "function that converts a Roman numeral to an integer."
rm *main.py
ls
pycodestyle --first *.py
rm -r __pycache__/
ls
git status -s
git add 5-number_keys.py 
git commit -m "function that returns the number of keys in a dictionary."
git push
ls
cd holbertonschool-higher_level_programming/
mkdir python-exceptions
cd python-
cd python-exceptions/
git add README.md 
git commit -m "create README"
git push
chmod a+x 0-main.py 0-safe_print_list.py 
./0-safe_print_list.py 
./0-main.py 
git add 0-safe_print_list.py 
git commit -m "function that prints x elements of a list."
chmod a+x 1-main.py 1-safe_print_integer.py 
./1-main.py 
chmod a+x 2-main.py 2-safe_print_list_integers.py 
./2-main.py 
git add 2-safe_print_list_integers.py 
git commit -m "function that prints the first x elements of a list and only integers."
git status -s
git add 1-safe_print_integer.py 
git commit -m "function that prints an integer with "{:d}".format()."
ls
chmod a+x 3-main.py 3-safe_print_division.py 
./3-main.py 
git add 3-safe_print_division.py 
git commit -m "function that divides 2 integers and prints the result."
chmod a+x 4-main.py 4-list_division.py 
./4-main.py 
pycodestyle --first *.py
git status -s
git add 4-list_division.py 
git commit -m "function that divides element by element 2 lists."
git push
ls
chmod a+x 5-main.py 5-raise_exception.py 
./5-main.py 
chmod a+x 6-main.py 6-raise_exception_msg.py 
./6-main.py 
git status -s
git add 5-raise_exception.py
git commit -m "function that raises a type exception."
git add 6-raise_exception_msg.py 
git commit -m "function that raises a name exception with a message."
git push
pycodestyle --first *.py
cd ..
mkdir python-test_driven_development
cd python-test_driven_development/
mkdir tests
cd tests/
python3 -m doctest ./tests/*
cd..
cd ..
python3 -m doctest ./tests/*
cd tests/
ls
rm 0-add_integer.txt 
cd ..
ls
python3 -m doctest ./tests/*
cd tests/
ls
cd ..
python3 -m doctest ./tests/*
cd tests/
cd ..
vim a
ls
python3 -m doctest ./tests/*
ython3 -m doctest -v ./tests/0-add_integer.txt | tail -2
python3 -m doctest -v ./tests/0-add_integer.txt | tail -2
chmod a+x 0-main.py 0-add_integer.py 
./0-main.py 
python3 -m doctest -v ./tests/0-add_integer.txt | tail -2
git status -s 
git add README.md 
git commit -m "create README"
git add 0-add_integer.py 
git commit -m "function that adds 2 integers."
cd tests/
git add README.md 
git commit -m "create README"
git add 0-add_integer.txt 
git commit -m "different test for a function that adds 2 integers."
git status -s
cd //
cd
ls
cd holbertonschool-higher_level_programming/
cd python-exceptions/
rm *main.py
ls
rm -r __pycache__/
cd ..
cd python-test_driven_development/
ls
git status -s
ls
cd holbertonschool-higher_level_programming/python-test_driven_development/
git status -s
git status- s
git status
git add 0-add_integer.py 
git commit -m "the file does not appear on gh"
git add 0-add_integer.py 
git commit -m "changed nothing just forgot to push .."
git push
python3 -m doctest -v ./tests/0-add_integer.txt | tail -2
ls
cd tests/
git add 0-add_integer.txt 
git commit -m "add Float overflow and cannot convert float NaN to integer"
git push
ls
cd holbertonschool-higher_level_programming/
ls
cd python-test_driven_development/
git status -s
git push
ls
cd tests/
ls
vim 2-main.py ..
mv 2-main.py /..
mv 2-main.py ../
ls
mv 2-matrix_divided.py ../
ls
cd..
ls
cd ..
ls
chmod a+x 2-main.py 2-matrix_divided.py 
ls
./2-main.py 
cd tests/
ls
cd ..
git status -s
git add 2-matrix_divided.py tests/2-matrix_divided.txt 
git commit -m "function that divides all elements of a matrix. and the doctest"
git add 2-matrix_divided.py 
git commit -m "modified commentary"
git push
git add 2-matrix_divided.py tests/2-matrix_divided.txt 
git commit -m "documented the module as expected (i hope)"
git pussh
git push
git add 2-matrix_divided.py 
git commit -m "documented my code"
git push
python3 -m doctest ./tests/*
git add tests/2-matrix_divided.txt 
git commit -m "change all the doctest thanks to anzo"
git push$
git push
git add 2-matrix_divided.py 
git commit -m "modified the code thanks to anzo again"
git push
git status -s
git add 3-say_my_name.py tests/3-say_my_name.txt 
git commit -m "function that prints My name is <first name> <last name> and her doctest"
git push
pycodestyle --first 3-say_my_name.py 
git add 3-say_my_name.py 
git commit -m "add pycodestyle"
git push
ls
cd tests/
ls
mv 4-main.py ..
mv 4-print_square.py ..
ls
cd ..
ls
chmod a+x 4-main.py 
./4-main.py 
pycodestyle 4-print_square.py 
pycodestyle --first 4-print_square.py 
python3 -m doctest ./tests/*
git status -s
git add 4-print_square.py tests/4-print_square.txt 
git commit -m "function that prints a square with the character # and her doctest"
git push
cd tests/
mv 5-main.py ..
ls
cd ..
ls
mv 5-text_indentation.txt tests/
ls 
cd tests/
ls
cd ..
pycodestyle --first 5-text_indentation.py 
chmod a+x 5-main.py 
./5-main.py 
python3 -m doctest ./tests/*
cd tests/
python3 -m doctest ./tests/*
clear
cd ..
git add 5-text_indentation.py 
git add tests/5-text_indentation.txt 
git commit -m "function that prints a text with 2 new lines after each of these characters: ., ? and : and its doctest" 
git push
cd tests/
chmod a+x 6-main.py 
./6-main.py 
import unittest
sudo apt install unittest
python3 -m unittest tests.6-max_integer_test 2>&1 | tail -1
head -7 tests/6-max_integer_test.py 
chmod a+x 6-max_integer_test.py 
head -7 tests/6-max_integer_test.py 
python3 -m unittest tests.6-max_integer_test 2>&1 | tail -1
python3 -m unittest tests.6-max_integer_test
cd ..
python3 -m unittest tests.6-max_integer_test
cd tests/
mv 6-main.py ..
mv 6-max_integer.py 
mv 6-max_integer.py ..
ls
cd ..
ls
python3 -m unittest tests.6-max_integer_test
python3 -m unittest tests.6-max_integer_test 2>&1 | tail -1
git status -s
git add tests/6-max_integer_test.py 
git commit -m "unittest file for the max_integer function"
git puhs
git push
ls
cd holbertonschool-higher_level_programming/
mkdir python-classes
cd python-classes/
git add README.md 
git commit -m "create README"
git push
chmod a+x 0-main.py 0-square.py 
./0-main.py 
pycodestyle --first 0-square.py 
git add 0-square.py 
git commit -m "empty class Square that defines a square:"
git add 0-square.py 
git commit -m "add commentary"
chmod a+x 1-main.py 1-square.py 
./1-main.py 
git status -s
git add 1-square.py 
git commit -m " class Square that defines a square by: (based on 0-square.py)"
chmod a+x 2-main.py 2-square.py 
pycodestyle --first *.py
git add 0-square.py 1-square.py 2-square.py 
git commit -m "add pycodestyle"
git status -s
git push
chmod a+x 2-main.py 
./2-main.py 
pycodestyle --first 3-square.py 
chmod a+x 3-main.py 3-square.py 
./3-main.py 
git add 3-square.py 
git commit -m "Write a class Square that defines a square by: (based on 2-square.py)"
pycodestyle --first 4-square.py 
chmod a+x 4-main.py 
chmod a+x 4-square.py 
./4-main.py 
git add 4-square.py 
git commit -m "Write a class Square that defines a square by: (based on 3-square.py)"
chmod a+x 5-main.py 5-square.py 
./5-main.py 
git add 5-square.py 
git commit -m "Write a class Square that defines a square by: (based on 4-square.py)"
pycodestyle --first 6-square.py 
git status -s 
git add 6-square.py 
git commit -m "Write a class Square that defines a square by: (based on 5-square.py"
git status -s
rm -f *main.py __pycache__/
rm -r __pycache__/
git status -s
cd ../python-test_driven_development/
ls
rm -r *main.py 6-max_integer.py __pycache__/
ls
git status -s
cd tests/
rm -r __pycache__/
cd ../../python-classes/
ls
chmod a+x 6-square.py 
git add 6-square.py 
git commit -m "add permissions"
git push
pycodestyle --first 6-square.py 
git add 6-square.py 
git commit -m "now the program works as intended"
git push
cd holbertonschool-higher_level_programming/
mkdir python-more_classes
cd python-more_
cd python-more_classes/
git add README.md 
git commit -m "create README"
git push
chmod a+x 0-main.py 0-rectangle.py 
./0-main.py 
git add 0-rectangle.py 
git commit -m "an empty class Rectangle that defines a rectangle:"
chmod a+x 1-main.py 1-rectangle.py 
./1-main.py 
git add 1-rectangle.py 
git commit -m "class Rectangle that defines a rectangle by: (based on 0-rectangle.py)"
chmod a+x 2-main.py 2-rectangle.py 
./2-main.py 
git add 2-rectangle.py 
git commit -m "class Rectangle that defines a rectangle by: (based on 1-rectangle.py)"
chmod a+x 3-rectangle.py 3-main.py 
./3-main.py 
git add 3-rectangle.py 
git commit -m "class Rectangle that defines a rectangle by: (based on 2-rectangle.py)"
pycodestyle --first *.py
git add 1-rectangle.py 2-rectangle.py 3-rectangle.py 
git commit -m "add pycodestyle"
pycodestyle --first *.py
chmod a+x 4-main.py 4-rectangle.py 
./4-main.py 
git add 4-rectangle.py 
git commit -m "Write a class Rectangle that defines a rectangle by: (based on 3-rectangle.py)"
pycodestyle --first *.py
chmod a+x 5-main.py 5-rectangle.py 
./5-main.py 
git add 
git add 5-rectangle.py 
git commit -m "Write a class Rectangle that defines a rectangle by: (based on 4-rectangle.py)"
chmod a+x 6-rectangle.py 6-main.py 
./6-main.py 
git add 6-rectangle.py 
git commit -m "class Rectangle that defines a rectangle by: (based on 5-rectangle.py)"
chmod a+x 8-main.py 7-main.py 8-rectangle.py 7-rectangle.py 
./8-main.py 
git status -s
./7-main.py 
git add 7-rectangle.py 
git commit -m "class Rectangle that defines a rectangle by: (based on 6-rectangle.py)"
git add 8-rectangle.py 
git commit -m "class Rectangle that defines a rectangle by: (based on 7-rectangle.py)"
chmod a+x 9-main.py 9-rectangle.py 
./9-main.py 
pycodestyle --first *.py
git status -s
git add 9-rectangle.py 
git commit -m "Write a class Rectangle that defines a rectangle by: (based on 8-rectangle.py)"
git push
rm *main.py
git status -s
rm -r __pycache__/
git status -s
pycodestyle --first *.py
git add .
git commit -m "add pycodestyle"
git add 3-rectangle.py 
git commit -m "generate a doctring more complete"
git push
pycodestyle *.py
git add 7-rectangle.py 
git commit -m "changed the __str__ method to a more complexe one"
git push
ls
cd holbertonschool-higher_level_programming/
mkdir python-inheritance
cd python-inheritance/
pycodestyle --first 0-lookup.py 
git add README.md 
git commit -m "create README"
git add 0-lookup.py 
git commit -m "Write a function that returns the list of available attributes and methods of an object"
chmod a+x 0-main.py 
./0-main.py 
pycodestyle --first 1-my_list.py 
mkdir tests
cd tests/
git add 1-my_list.txt 
cd ..
git add 1-my_list.py 
chmod a+x 1-main.py 
./1-main.py 
git status -s
git commit -m "Write a class MyList that inherits from list and its test on txt format"
cd tests/
git add 1-my_list.txt 
git commit -m "add more tests"
cd ..
chmod a+x 2-main.py 
pycodestyle --first 2-is_same_class.py 
./2-main.py 
git add 2-is_same_class.py 
git commit -m "Write a function that returns True if the object is exactly an instance of the specified class ; otherwise False."
chmod a+x 3-main.py 
./3-main.py 
git add 3-is_kind_of_class.py 
git commit -m "Write a function that returns True if the object is an instance of, or if the object is an instance of a class that inherited from, the specified class ; otherwise False."
chmod a+x 4-main.py 
./4-main.py 
git status -s
git add 4-inherits_from.py 
git commit -m "Write a function that returns True if the object is an instance of a class that inherited (directly or indirectly) from the specified class ; otherwise False."
git status -s
mv cat\ 5-main.py 5-main.py
chmod a+x 5-main.py 
./5-main.py 
git add 5-base_geometry.py 
git commit -m "Write an empty class BaseGeometry."
pycodestyle --first *.py
pycodestyle *.py
git add 6-base_geometry.py 
git commit -m "Write a class BaseGeometry (based on 5-base_geometry.py)."
pycodestyle *.py
chmod a+x 6-main.py 
./6-main.py 
chmod a+x 7-main.py 
./7-main.py 
cd tests/
git add 7-base_geometry.txt 
cd ..
git add 7-base_geometry.py 
pycodestyle *.py
git status -s
git commit -m "Write a class BaseGeometry (based on 6-base_geometry.py) and its doctest"
chmdo a+x 8-main.py 
chmod a+x 8-main.py 
./8-main.py 
pycodestyle *.py
./8-main.py 
chmod a+x 9-main.py 
./9-main.py 
git add 9-rectangle.py 
git commit -m "Write a class Rectangle that inherits from BaseGeometry (7-base_geometry.py). (task based on 8-rectangle.py)"
pycodestyle *.py
chmod a+x 10-main.py 
./10-main.py 
git add 10-square.py 
git commit -m "Write a class Square that inherits from Rectangle (9-rectangle.py):"
git status -s
./10-main.py 
pycodestyle *.py
chmod a+x 11-main.py 
./11-main.py 
git status -s
git add 11-square.py 
git commit -m "Write a class Square that inherits from Rectangle (9-rectangle.py). (task based on 10-square.py)."
git push
ls
cat README.md 
pycodestyle *.py
git status -s
git add 0-lookup.py 1-my_list.py 2-is_same_class.py 3-is_kind_of_class.py 4-inherits_from.py 5-base_geometry.py 6-base_geometry.py 7-base_geometry.py 8-rectangle.py 9-rectangle.py 10-square.py 11-square.py 
git commiut -m "ad shebang"
git commit -m "add shebang"
git push
git status -s
git add 0-lookup.py 1-my_list.py 2-is_same_class.py 3-is_kind_of_class.py 4-inherits_from.py 5-base_geometry.py 6-base_geometry.py 7-base_geometry.py 8-rectangle.py 9-rectangle.py 10-square.py 11-square.py 
git commit -m "add a description at the top of the file"
git push
cd tests/
git add 1-my_list.txt 7-base_geometry.txt 
git commit -m "change the doctest thanks to anzo"
git push
git add 7-base_geometry.txt 
git status -s
cd ..
git add 7-base_geometry.py 
git commit -m "change the integer_validator fonction"
git push
pycodestyle 7-base_geometry.py 
git add 7-base_geometry.py 
chmod a+x 7-base_geometry.py 
git add 7-base_geometry.py 
git commit -m "Write a class BaseGeometry (based on 6-base_geometry.py)."
pycodestyle 7-base_geometry.py 
git push
cd holbertonschool-higher_level_programming/
mkdir python-abc
cd python-abc/
git add README.md 
git commit -m "add README.md"
git push
chmod a+x main_00_abc.py 
./main_00_abc.py 
pycodestyle task_00_abc.py 
git add task_00_abc.py 
git commit -m "Create an abstract class named Animal using the ABC package"
pycodestyle task_01_duck_typing.py 
git add task_01_duck_typing.py 
chmod a+x main_01_duck_typing.py 
./main_01_duck_typing.py 
pycodestyle task_01_duck_typing.py 
git add task_01_duck_typing.py 
git commit -m "Create an abstract class named Shape with two abstract methods: area and perimeter."
git push
git add task_00_abc.py task_01_duck_typing.py 
git commit -m "changed the shebang"
git push
pycodestyle task_02_verboselist.py 
chmod a+x main_02_verboselist.py 
./main_02_verboselist.py 
pycodestyle task_02_verboselist.py 
git add task_02_verboselist.py 
git commit -m "Create a class named VerboseList that extends the Python list class."
git push
chmod a+x main_03_countediterator.py 
./main_03_countediterator.py 
pycodestyle task_03_countediterator.py 
git add task_03_countediterator.py 
git commit -m "create a class named CountedIterator that extends the built-in iterator obtained from the iter function."
chmod a+x main_04_flyingfish.py 
./main_04_flyingfish.py 
pycodestyle task_04_flyingfish.py 
git add task_04_flyingfish.py 
git commit -m "Construct a FlyingFish class that inherits from both a Fish class and a Bird class. "
git push
chmod a+x main_05_dragon.py 
./main_05_dragon.py 
pycodestyle *task
pycodestyle task*
pycodestyle *.py
git add task_05_dragon.py 
git commit -m "Design two mixin classes, SwimMixin and FlyMixin, each equipped with methods swim and fly respectively."
git push
git status -s
rm main*
ls
rm -r __pycache__/
ls
git status -s
cd ../python-inheritance/
rm main*
ls
rm *main.py
ls
rm -r __pycache__/
git status -s
cd ..
pwd
cd python-abc/
git add task_00_abc.py 
git commit -m "change the sound of dog from woof to bark"
git add task_01_duck_typing.py 
git commit -m "increment the area with abs(area) instead of just area"
git push
ls
cd holbertonschool-higher_level_programming/
mkdir python-input_output
cd python-input_output/
git add README.md 
git commit -m "create README"
git push
pycodestyle 0-read_file.py 
chmod a+x 0-read_file.py 
chmod a+x 0-main.py 
./0-main.py 
git add 0-read_file.py 
git commit -m "function that reads a text file (UTF8) and prints it to stdout:"
pycodestyle 1-write_file.py 
chmod a+x 1-main.py 
./1-main.py my_fi
./1-main.py
cat my_first_file.txt 
git add 1-write_file.py 
git commit -m " function that writes a string to a text file (UTF8) and returns the number of characters written:"
chmod a+x 2-main.py 
./2m
./2-main.py 
cat file_append.txt 
pycodestyle 2-append_write.py 
git add 2-append_write.py 
git commit -m "function that appends a string at the end of a text file (UTF8) and returns the number of characters added"
pycodestyle 3-to_json_string.py 
chmod a+x 3-main.py 
./3-main.py 
git add 3-to_json_string.py 
git commit -m "function that returns the JSON representation of an object (string)"
pycodestyle 3-to_json_string.py 
pycodestyle 4-from_json_string.py 
chmod a+x 4-main.py 
./4-main.py 4-main.py 
ls
cd holbertonschool-higher_level_programming/
cd python-input_output/
./4-main.py
git add 4-from_json_string.py 
git commit -m "function that returns an object (Python data structure) represented by a JSON string:"
pycodestyle 5-save_to_json_file.py 
chmod a+x 5-main.py 
./5-main.py 
cat my_list.json ; echo ""
cat my_dict.json ; echo ""
cat my_set.json ; echo ""
git add 5-save_to_json_file.py 
git commit -m "function that writes an Object to a text file, using a JSON representation"
pycodestyle 6-load_from_json_file.py 
chmod a+x 6-main.py 
./6-main.py
cat my_list.json ; echo ""
cat my_dict.json ; echo ""
cat my_fake.json ; echo ""
git add 6-load_from_json_file.py 
git commit -m "function that writes an Object to a text file, using a JSON representation"
git push
ls
git status -s
git add 7-add_item.py 
git commit -m "script that adds all arguments to a Python list, and then save them to a file"
pycodestyle 8-class_to_json.py 
chmod a+x 8-main.py 
./8-main.py 
pycodestyle 8-class_to_json.py 
git status -s
git add 8-class_to_json.py 
git commit -m " function that returns the dictionary description with simple data structure"
pycodestyle 9-student.py 
chmod a+x 9-main.py 
./8-main.py 
./9-main.py 
git add 9-student.py 
git commit -m "class Student that defines a student by"
git push
git add 10-student.py 
git commit -m "class Student that defines a student by: (based on 9-student.py)"
git add 11-student.py 
git commit -m "class Student that defines a student by: (based on 10-student.py)

"
chmod a+x 12-main.py 
./12-main.py 
git add 12-pascal_triangle.py 
git commit -m "function that returns a list of lists of integers representing the Pascal’s triangle of n"
git push
pycodestyle *.py
chmod a+x 11-main.py 
./11-main.py 
./11-main.py student.json
git add 11-student.py 
git commit -m "remove the import of json module"
git push
cd ..
mkdir python-serialization
cd python-serialization/
git add README.md 
git commit -m "create README"
git push
pycodestyle task_00_basic_serialization.py 
git add task_00_basic_serialization.py 
git commit -m "basic serialization module that adds the functionality to serialize a Python dictionary to a JSON file and deserialize the JSON file to recreate the Python Dictionary."
pycodestyle task_01_pickle.py 
chmod a+x task_00_basic_serialization.py task_01_pickle.py 
git add task_00_basic_serialization.py 
git commit -m "gave permission"
git status -s
git add task_01_pickle.py 
git commit -m "serialize and deserialize custom Python objects using the pickle module."
pycodestyle task_00_basic_serialization.py 
pycodestyle task_01_pickle.py 
pycodestyle task_02_csv.py 
chmod a+x task_02_csv.py 
git add task_02_csv.py 
git commit -m "reading data from one format (CSV) and converting it into another format (JSON) using serialization techniques."
chmod a+x task_03_xml.py 
git add task_03_xml.py 
git commit -m "serialization and deserialization using XML as an alternative format to JSON."
git push
git status -s
cd ../python-input_output/
ls
rm *main
rm *main.py
ls
git status -s
rm *.json
ls
rm -r __pycache__/
git status -s
rm 8-my_class.py file_append.txt my_file_0.txt my_first_file.txt 
git status -s
cd ..
git pull
ls
git clone https://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@github.com/Kraoshin/holbertonschool-hbnb.git
cd holbertonschool-hbnb/
mkdir part1
ls
git add README.md 
git add part1/
git commit -m "create README"
git push
cd part1/
git add empty 
git commit -m "just to make appear part1 folder"
git push
ls
cd holbertonschool-higher_level_programming/
ls
mkdir restful-api
cd restful-api/
git add README.md 
git commit -m "create a README"
git push
curl
curl --version
curl https://jellyseerr.armellkorp.ovh/login
curl https://jsonplaceholder.typicode.com/posts
curl -I https://jsonplaceholder.typicode.com/posts
curl -X POST -d "title=foo&body=bar&userId=1" https://jsonplaceholder.typicode.com/posts
requests
pip install requests
cd holbertonschool-higher_level_programming/restful-api/
ls
pycodestyle task_02_requests.py 
git add task_02_requests.py 
git commit -m "Consuming and processing data from an API using Python"
git push
git pull
git add task_02_requests.py 
git commit -m "Consuming and processing data from an API using Python"
git push
pycodestyle task_03_http_server.py 
git add task_03_http_server.py 
git commit -m "Develop a simple API using Python with the `http.server` module"
git push
cd holbertonschool-higher_level_programming/restful-api/
chmod a+x main_02_requests.py 
./main_02_requests.py 
chmod a+x task_03_http_server.py 
./task_03_http_server.py 
chmod a+x task_02_requests.py 
./task_02_requests.py 
git add task_02_requests.py 
git commit -m "add x rights'
"
git push
git add task_03_http_server.py 
git commit -m "add x rights"
git push
python 3 main_02_requests.py 
python main_02_requests.py 
python3 main_02_requests.py 
cd holbertonschool-higher_level_programming/restful-api/
git add task_02_requests.py 
git commit -m "change the way to use url"
git push
pycodestyle task_04_flask.py 
chmod a+x task_04_flask.py 
git add task_04_flask.py 
git commit -m "Develop a Simple API using Python with Flask"
git push
git add task_04_flask.py 
git commit -m "forgot to save before pushing"
git push
pycodestyle task_05_basic_security.py 
git add task_05_basic_security.py 
git commit -m "API Security and Authentication Techniques"
git push
pip install -r requirements.txt
sudo apt install python3-pip
pip install -r requirements.txt
cd holbertonschool-hbnb/
ls
mkdir part2
cd part2/
ls
git add empty 
git commit -m "empty file to make the dir appear on gh"
git push
cd ..
git pull
git config pull.rebase false
git status -s
ls
cd part2/
ls
git add empty 
git commit -m "create empty file to make the dir appear"
git push
git pull ff
git pull origin main 
ls
git statys -s
git status 
git push
ls
mkdir app
cd app/
ls
mkdir api
cd api/
ls
pwd
ls
mkdir v1/
cd v1/
cd ../..
ls
mkdir models
cd models/
ls
cd ../api/
ls
cd v1/
ls
cd ..
ls
cd ..
ls
mkdir services
cd services/
cd ..
mkdir persistence
cd persistence/
cd ../..
ls
git status -s
git add .
git status -s
git commit -m "create all files and dir"
git push
ls
cd app/api/v1/
ls
cd ..
cd ../..
ls$
ls
cd app/
ls
cd models/
ls
mv persistence/ ..
mv services/ ..
cd ..
ls
cd models/
ls
cd ..
git add .
git commit -m "moove dir in their correct dir"
git push
ls
git add __init__.py 
git commit -m "add the recquired code line in the __init__ file"
git push
cd persistence/
ls
git status -s
git add repository.py 
git commit -m "add in memory and interface as given by the gh"
git push
cd ..
ls
cd services/
git add facade.py 
git commit -m "create the plan for the facade pattern as given in the gh"
git push
git add __init__.py 
git commit -m "create the facade class"
git push
cd ../..
s
ls
git add run.py 
git commit -m "create the entry point"
git push
git add config.py 
git commit -m "create the basic configuration"
git pusj
git push
git add requirements.txt 
git commit -m "add the recquired dependencies and packages"
git push
cd ../
python run.py
python3 run.py
l
ls
cd part2/
python3 run.py
cd app/
git add __init__.py 
git commit -m "put the return app line inside the function"
git push
python3 run.py
cd ..
python3 run.py
pip install -r requirements.txt
pip install requests
pip install Flask-HTTPAuth
apt install python3-Flask-JWT-Extended
cd holbertonschool-hbnb/
pip install -r requirements.txt
cd part2/
git add requirements.txt 
git commit -m "delete the pip line"
git push
pip install -r requirements.txt
pip install flask
apt install python3-flask
cd /
apt install python3-flask
ls
cd home/
apt install python3-flask
sudo apt install python3-flask
sudo apt install python3-flask-restx
sudo apt install python3-flaskrestx
sudo apt install python3-flask-restx
sudo apt update
apt list --upgradable
sudo apt install Flask-HTTPAuth
ls
cd kraoshin/
ls
cd holbertonschool-hbnb/
ls
cd part2
ls
python3 run.py
sudo apt install flask_restx
python3 -m venv myenv
sudo apt install python3.12-venv
python3 -m venv myenv
ls
python3 -m venv myenv
source myenv/bin/activate
ls
pip install flask-restx
python3 -c "import flask_restx; print(flask_restx.__version__)"
python3 run.py
deactivate
python3 run.py
python3 -m venv myenv
source myenv/bin/activate
python3 run.py
deactivate
git status -s
rm -r myenv/ app/__pycache__/
ls
git status -s
git add app/models/review.py 
git commit -m "create the base of the review class"
git push
ls
git status -s
git branch
git checkout killian
git branch kraoshin
git branch
git checkout kraoshin 
git checkout main 
cd app/models/
git add basemodel.py 
git commit -m "create the basemodel that all classes will inherit"
git push
git checkout kraoshin 
git pull
git pull origin main 
git status -s
git add ../api/v1/reviews.py 
git add review.py 
git add ../services/facade.py 
git commit -m "add all the code given for the exercises and start working on facade method"
git push
git push origin kraoshin 
git checkout 
git branch
git checkout main 
git pull origin cyprien 
git pull origin kraoshin 
git status -s
git add basemodel.py 
git commit -m "corrected a wrong indentation on self.save"
git puhs
git push
git checkout kraoshin 
git pull origin main 
git pull origin cyprien 
cd holbertonschool-hbnb/part2/app/services/
git add facade.py 
git commit -m "increment the update review func"
git push origin kraoshin 
cd holbertonschool-hbnb/part2/app/services/
git add facade.py 
git commit -m "add the delete_review and change few var names"
git push origin kraoshin 
git add facade.py 
git commit -m "change indentation due to a bug"
git push
git push origin kraoshin 
pycodestyle facade.py 
git add facade.py 
git commit -m "change a lot of indentations"
git push origin kraoshin 
cd ../api/v1/
git add reviews.py 
git commit -m "create the route for the api"
git push
git push origin kraoshin 
git status -s
cd ../../
ls
cd services/
git status -s
cd ../
git add __init__.py 
git commit -m "add the namespace for the review part of the project"
git push origin kraoshin 
git status 
cd holbertonschool-hbnb/
git pull origin main
cd part2
python3 run.py
python -m venv
python3 -m venv
pwd
python3 -m venv /home/kraoshin/holbertonschool-hbnb/part2/
python3 run.py
cd holbertonschool-hbnb/part2/
python3 run.py 
pip install flask
pip install flask_restx
python3 run.py 
deactivate
deactivate
git pull origin cyprien 
python3 venv /home/kraoshin/holbertonschool-hbnb/part2/
python3 venv
cd 
python3 venv /home/kraoshin/holbertonschool-hbnb/part2/
deactivate
/bin/python3 /home/kraoshin/.vscode-server/extensions/ms-python.python-2025.0.0-linux-x64/python_files/printEnvVariablesToFile.py /home/kraoshin/.vscode-server/extensions/ms-python.python-2025.0.0-linux-x64/python_files/deactivate/bash/envVars.txt
chmod u+w settings.json
/bin/python3 /home/kraoshin/.vscode-server/extensions/ms-python.python-2025.0.0-linux-x64/python_files/printEnvVariablesToFile.py /home/kraoshin/.vscode-server/extensions/ms-python.python-2025.0.0-linux-x64/python_files/deactivate/bash/envVars.txt
deactivate
python3 -m venv /home/kraoshin/holbertonschool-hbnb/part2/
python3 venv /home/kraoshin/holbertonschool-hbnb/part2/
python3 -m  venv /home/kraoshin/holbertonschool-hbnb/part2/
python3 -m venv venv
python3 -m venv
python3 -m venv /home/kraoshin/holbertonschool-hbnb/part2/
deactivate
python3 -m venv /home/kraoshin/holbertonschool-hbnb/part2/
python3 -m venv /home/kraoshin/holbertonschool-hbnb/
import venv
python3 -m venv /home/kraoshin/holbertonschool-hbnb/part2/
python3 -m venv venv
python3 -m venv venv
python3 -venv /home/kraoshin/holbertonschool-hbnb/part2/
python3 -m venv 
python3 -m venv venv
cd holbertonschool-hbnb/part2/
python3 run.py 
python -m venv venv
python3 -m venv venv
source venv/bin/activate
deactivate
source venv/bin/activate
python3 run.py 
pip install flask flask_restx
python3 run.py 
deactivate
git pull origin cyprien 
source venv/bin/activate
pip install flask flask_restx
python3 run.py 
cd holbertonschool-hbnb/part2/
source venv/bin/activate
pip install flask flast_restx
python3 run.py 
deactivate
git pull origin cyprien 
source venv/bin/activate
python3 run.py 
deactivate
git pull origin cyprien 
tr
sz
source venv/bin/activate
deactivate
git status -s
cd app/api/v1/
git add places.py 
git commit -m "add the reviews to the places model"
git push origin kraoshin 
source venv/bin/activate
cd ../../
cd ..
source venv/bin/activate
python3 run.py 
deactivate
git add app/api/v1/places.py 
git commit -m "add a forgotten comma"
git push origin kraoshin 
source venv/bin/activate
python3 run.py 
apt install -y mysql-server
sudo apt install -y mysql-server
mysql --version
cd holbertonschool-higher_level_programming/
mkdir SQL_introduction
cd SQL_introduction/
git add README.md 
git commit -m "create README"
git push
git branch
service mysql start
sudo journalctl -u mysql.service
sudo systemctl status mysql.service
mysql -uroot
sudo mysql -u root
cat 0-list_databases.sql | mysql -hlocalhost -uroot -p
cat 0-list_databases.sql | sudo mysql -hlocalhost -uroot -p
cat 1-create_database_if_missing.sql | mysql -hlocalhost -uroot -p
cat 1-create_database_if_missing.sql | sudo mysql -hlocalhost -uroot -p
cat 0-list_databases.sql | sudo mysql -hlocalhost -uroot -p
git status -s
git add 0-list_databases.sql 
git commit -m "create a sql script that show all database"
git add 1-create_database_if_missing.sql 
git commit -m "create a script that create a database if she does not already exist"
git add 2-remove_database.sql 
git commit -m "create a sql script that delete a database if she exist"
cat 2-remove_database.sql | sudo mysql -hlocalhost -uroot -p
cat 0-list_databases.sql | sudo mysql -hlocalhost -uroot -p
cat 3-list_tables.sql | sudo mysql -hlocalhost -uroot -p mysql
git status 
cat 4-first_table.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
cat 1-create_database_if_missing.sql | sudo mysql -hlocalhost -uroot -p
cat 4-first_table.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
cat 3-list_tables.sql | sudo mysql -hlocalhost -uroot -p mysql
cat 3-list_tables.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
git status -s
git add 3-list_tables.sql 
git commit -m "create sql script that list all tables"
git add 4-first_table.sql 
git commit -m "sql script that create a table if she does not exist"
cat 5-full_table.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
git add 5-full_table.sql 
git commit -m "script that prints the following description of the table first_table"
cat 6-list_values.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
git add 6-list_values.sql 
git commit -m "lists all rows of the table first_table from the database hbtn_0c_0"
git add 7-insert_value.sql 
git commit -m "inserts a new row in the table first_table (database hbtn_0c_0)"
cat 7-insert_value.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
cat 6-list_values.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
git status -s
cat 8-count_89.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0 | tail -1
git add 8-count_89.sql 
git commit -m "displays the number of records with id = 89 in the table first_table of the database hbtn_0c_0"
git add 8-count_89.sql 
git status -s
cat 9-full_creation.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
git add 9-full_creation.sql 
git commit -m "creates a table second_table in the database hbtn_0c_0"
cat 10-top_score.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
git add 10-top_score.sql 
git commit -m "lists all records of the table second_table of the database hbtn_0c_0"
git status -s
cat 11-best_score.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
git add 11-best_score.sql 
git commit -m "lists all records with a score >= 10 in the table second_table of the database hbtn_0c_0"
cat 12-no_cheating.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
cat 10-top_score.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
git add 12-no_cheating.sql 
git commit -m "-- updates the score of Bob to 10 in the table second_table"
git status -s
git add 13-change_class.sql 
git commit -m "-- removes all records with a score <= 5 in the table second_table"
cat 13-change_class.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
cat 10-top_score.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
cat 14-average.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
git status -s
git add 14-average.sql 
git commit -m "script that computes the score average of all records in the table second_table of the database hbtn_0c_0"
cat 15-groups.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
git add 15-groups.sql 
git commit -m "lists the number of records with the same score in the table second_table of the database hbtn_0c_0"
cat 16-no_link.sql | sudo mysql -hlocalhost -uroot -p hbtn_0c_0
git add 16-no_link.sql 
git commit -m "lists all records of the table second_table of the database hbtn_0c_0"
git push
git status -s
cd ..
mkdir SQL_more_queries
cd SQL_more_queries/
git add README.md 
git commit -m "create README"
git push
cat 0-privileges.sql | sudo mysql -hlocalhost -uroot -p
git add 0-privileges.sql 
git commit "script that lists all privileges of the MySQL users user_0d_1 and user_0d_2"
cat 1-create_user.sql | sudo mysql -hlocalhost -uroot -p
cat 0-privileges.sql | sudo mysql -hlocalhost -uroot -p
git status 
git add 1-create_user.sql 
git status -s
git commit -m "script that creates the MySQL server user"
git add 2-create_read_user.sql 
git commit -m "script that creates the database hbtn_0d_2 and the user user_0d_2."
cat 2-create_read_user.sql | sudo mysql -hlocalhost -uroot -p
cat 0-privileges.sql | sudo mysql -hlocalhost -uroot -p
git status -s
cat 3-force_name.sql | sudo mysql -hlocalhost -uroot -p hbtn_0d_2
echo 'INSERT INTO force_name (id, name) VALUES (89, "Best School");' | sudo mysql -hlocalhost -uroot -p hbtn_0d_2
echo 'INSERT INTO force_name (id) VALUES (333);' | sudo mysql -hlocalhost -uroot -p hbtn_0d_2
git add 3-force_name.sql 
git commit -m "script that creates the table force_name on your MySQL server"
git add 4-never_empty.sql 
git commit -m "script that creates the table id_not_null on your MySQL server."
git add 5-unique_id.sql 
git commit -m "script that creates the table unique_id on your MySQL server."
git add 6-states.sql 
git commit -m "script that creates the database hbtn_0d_usa and the table states"
git status 
git add 7-cities.sql 
git commit -m "script that creates the database hbtn_0d_usa and the table cities"
git add 8-cities_of_california_subquery.sql 
git commit -m "script that lists all the cities of California that can be found in the database hbtn_0d_usa"
git add 9-cities_by_state_join.sql 
git commit -m "script that lists all cities contained in the database hbtn_0d_usa"
git add 10-genre_id_by_show.sql 
git commit -m "script that lists all shows contained in hbtn_0d_tvshows that have at least one genre linked"
git add 11-genre_id_all_shows.sql 
git commit -m "script that lists all shows contained in the database hbtn_0d_tvshows"
git add 12-no_genre.sql 
git commit -m "script that lists all shows contained in hbtn_0d_tvshows without a genre linked."
git add 13-count_shows_by_genre.sql 
git commit -m "script that lists all genres from hbtn_0d_tvshows and displays the number of shows linked to each."
git add 14-my_genres.sql 
git commit -m "script that uses the hbtn_0d_tvshows database to lists all genres of the show Dexter."
git add 15-comedy_only.sql 
git commit -m "script that lists all Comedy shows in the database hbtn_0d_tvshows."
git add 16-shows_by_genre.sql 
git commit -m "script that lists all shows, and all genres linked to that show, from the database hbtn_0d_tvshows."
git push
sudo apt update
sudo apt install mysql-server
mysql --version
sudo mysql
sudo apt-get install python3-dev
sudo apt-get install libmysqlclient-dev
sudo apt-get install zlib1g-dev
sudo pip3 install mysqlclient
apt install mysqlclient
sudo apt install mysqlclient
sudo apt install SQLAlchemy
sudo apt-get install python3-dev
sudo apt-get install libmysqlclient-dev
sudo apt-get install zlib1g-dev
sudo pip3 install mysqlclient
sudo pip3 install SQLAlchemy
sudo mysql
sudo pip3 install mysqlclient
sudo apt install mysqlclient
python3
>>> import MySQLdb
>>> MySQLdb.version_info 
sudo apt install SQLAlchemy
python3
>>> import sqlalchemy
>>> sqlalchemy.__version__ 
sudo apt install SQLAlchemy
python3
source venv/bin/activate
sudo pip3 install mysqlclient
sudo pip3 install SQLAlchemy
deactivate
pip install sqlalchemy
cd holbertonschool-higher_level_programming/
mkdir python-object_relational_mapping
cd python-object_relational_mapping/
git add README.md 
git commit -m "create README"
git push
chmod a+x 0-select_states.py 
source venv/bin/activate
cd 
source venv/bin/activate
cd holbertonschool-higher_level_programming/
cd python-object_relational_mapping/
pip install sqlalchemy
deactivate
pycodestyle 0-select_states.py 
cat 0-select_states.sql | mysql -uroot -p
cat 0-select_states.sql | sudo mysql -uroot -p
./0-select_states.py root root hbtn_0e_0_usa
sudo pip3 install mysqlclient
pip install mysqlclient
source test/bin/activate
source venv/bin//activate
sudo apt-get install libmysqlclient-dev
pip install mysqlclient
python3 -m venv mon_env
source mon_env/bin/activate
pip install mysqlclient
sudo apt-get install python3-dev
sudo apt-get install libmysqlclient-dev
sudo apt-get install zlib1g-dev
sudo pip3 install mysqlclient
pip install mysqlclient
sudo apt-get install pkg-config
sudo apt-get install libmysqlclient-dev
pip install mysqlclient
cat 0-select_states.sql | sudo mysql -uroot -p
./0-select_states.py root root hbtn_0e_0_usa
python3 -m pip install mysqlclient
pip install mysqlclient
deactivate
git status -s
git add 0-select_states.py 0-select_states.sql 
rm -r mon_env/
git commit -m "script that lists all states from the database hbtn_0e_0_usa"
git push
pycodestyle 1-filter_states.py 
git add 1-filter_states.py 
git commit -m "script that lists all states with a name starting with N (upper N)"
git push
pycodestyle 1-filter_states.py 
git add 1-filter_states.py 
git commit -m "script that lists all states with a name starting with N (upper N)"
git push
chmod a+x 1-filter_states.py 
git add 1-filter_states.py 
git commit -m "add permission to the file"
git push
pycodestyle 1-filter_states.py 
sudo mysql
python3 0-select_states.py kraoshin triec56520 hbtn_0e_0_usa
python3 -m venv
python3 -m venv venv
source venv
source /venv
source venv/bin/activate
pip install mySQLdb
sudo pip3 install mysqlclient
python3
sudo apt install mysqlclient
deactivatr
deactivate
git add 1-filter_states.py 
git commit -m "goes back to previous version"
git push
pycodestyle 2-my_filter_states.py 
chmod a+x 2-my_filter_states.py 
git add 2-my_filter_states.py 
git commit -m "script that takes in an argument and displays all values in the states table of hbtn_0e_0_usa where name matches the argument"
git push$
git push
git add 2-my_filter_states.py 
git commit -m "script that takes in an argument and displays all values in the states table of hbtn_0e_0_usa where name matches the argument"
git push
pycodestyle 2-my_filter_states.py 
git add 2-my_filter_states.py 
git commit -m "forgot to pycodestyle"
git push
pycodestyle 3-my_safe_filter_states.py 
chmod a+x 3-my_safe_filter_states.py 
git add 3-my_safe_filter_states.py 
git commit -m "takes in an argument and displays all values in the states table
of hbtn_0e_0_usa where name matches the argument, safe from SQL injections"
git push
pycodestyle 4-cities_by_state.py 
chmod a+x 4-cities_by_state.py 
git add 4-cities_by_state.py 
git commit -m "script that lists all cities from the database hbtn_0e_4_usa"
git push
chmod a+x 5-filter_cities.py
pycodestyle 5-filter_cities.py 
git add 5-filter_cities.py 
git commit -m "script that takes in the name of a state as an argument and lists all cities of that state, using the database hbtn_0e_4_usa"
pycodestyle model_state.py 
chmod a+x model_state.py 
pycodestyle model_state.py 
git add model_state.py 
git commit -m "python file that contains the class definition of a State and an instance"
pycodestyle 7-model_state_fetch_all.py 
chmod a+x 7-model_state_fetch_all.py 
git add 7-model_state_fetch_all.py 
git commit -m "script that lists all State objects from the database"
git push
chmod a+x 8-model_state_fetch_first.py 
git add 8-model_state_fetch_first.py 
pycodestyle 8-model_state_fetch_first.py 
git add 8-model_state_fetch_first.py 
git commit -m "script that prints the first State object"
git push
sudo apt-get update
sudo apt-get install pkg-config
sudo apt-get install libmysqlclient-dev
source venv/bin/activate
pip install mysqlclient
pip install SQLAlchemy
cd holbertonschool-higher_level_programming/python-object_relational_mapping/
./8-model_state_fetch_first.py 
pip install SQLAlchemy
./8-model_state_fetch_first.py 
pip show SQLAlchemy
python 8-model_state_fetch_first.py root mypassword hbtn_0e_6_usa
pycodestyle 9-model_state_filter_a.py 
chmod a+x 9-model_state_filter_a.py 
git add 9-model_state_filter_a.py 
git commit -m "script that lists all State objects that contain the letter a"
git push
pycodestyle 10-model_state_my_get.py 
git add 10-model_state_my_get.py 
git commit -m "Prints the State object with the name passed as argument
from the database hbtn_0e_6_usa"
git push
chmod a+x 10-model_state_my_get.py 
git add 10-model_state_my_get.py 
git commit -m "add x to all permission"
pycodestyle 10-model_state_my_get.py 
git push
chmod a+x 11-model_state_insert.py 
pycodestyle 11-model_state_insert.py 
git add 11-model_state_insert.py 
git commit -m "script that adds the State object “Louisiana” to the database hbtn_0e_6_usa"
git push
chmod a+x 12-model_state_update_id_2.py 
git add 12-model_state_update_id_2.py 
git commit -m "script "
git push
git add 12-model_state_update_id_2.py 
pycodestyle 12-model_state_update_id_2.py 
git add 12-model_state_update_id_2.py 
git commit -m "add pycodestyle"
git push
pycodestyle 13-model_state_delete_a.py 
chmod a+x 13-model_state_delete_a.py 
git add 13-model_state_delete_a.py 
git commit -m "Deletes all State objects with a name containing the letter a from the database hbtn_0e_6_usa"
git push
pycodestyle model_city.py 
chmod a+x 14-model_city_fetch_by_state.
chmod a+x 14-model_city_fetch_by_state.py 
git add model_city.py 14-model_city_fetch_by_state.py 
git commit -m "Python file similar to model_state.py named model_city.py that contains the class definition of a City script 14-model_city_fetch_by_state.py that prints all City objects from the database hbtn_0e_14_usa"
git push
pycodestyle 14-model_city_fetch_by_state.py model_city.py 
chmod a+x 14-model_city_fetch_by_state.py model_city.py 
git add 14-model_city_fetch_by_state.py model_city.py 
git commit -m "add permission x to all"
git push
git add model_city.py 
git commit -m "add tje state_id row as a feignkey"
git push
pycodestyle model_city.py 
ls -l
git add model_city.py 
git commit -m "delete a comma after autoincrement"
git push 
git add model_city.py 
git commit -m "delete a comma after autoincrement"
git add model_city.py 
git commit -m "add the nullable = false even if its pointless"
git push
pycodestyle 14-model_city_fetch_by_state.py model_city.py 
git add 14-model_city_fetch_by_state.py model_city.py 
git commit -m "rewrite everything"
git push
pycodestyle 14-model_city_fetch_by_state.py model_city.py 
git add 14-model_city_fetch_by_state.py model_city.py 
git commit -m "print all city object"
git push
cd holbertonschool-hbnb/
git pull origin cyprien 
git status -s
git add *
git commit -m "push all the changes from the cyprien branch"
git push origin kraoshin 
git pull origin cyprien 
git status -s
git add part3/app/api/v1/places.py 
git commit -m "update the places class to add security layers using jwt auth"
git add part3/app/api/v1/reviews.py 
git commit -m "update the reviews classes to add security layers using jwt auth
"
git add part3/app/api/v1/users.py 
git commit -m "update the users classes to add security layers using jwt auth"
git push origin kraoshin 
git add part3/app/api/v1/places.py 
git commit -m "add a check to ensure that the one creating the place is the one connected"
git push origin kraoshin 
cd holbertonschool-hbnb/
git pull origin cyprien 
git status -s
git add part3/app/services/user_repo.py 
git commit -m "create a user repository as specified in the instruction"
git add part3/app/api/v1/users.py 
git commit -m "modified playload to payload"
git status -s
git add part3/app/models/basemodel.py 
git commit -m "make the basemodel class to inherit from sqlalch"
git add part3/app/models/user.py 
git status -s
git commit -m "make the user model use db model"
git add part3/app/services/facade.py 
git commit -m "update user method to work with a db"
git push origin kraoshin 
git status -s
git add part3/app/models/place.py 
git commit -m "modified the value from int to float"
git status -s
git add part3/requirements.txt 
git commit -m "add sqlalchemy in the file"
git add part3/app/services/pra_repo.py 
git commit -m "create the repo for place/review/amenity to interact with the database"
git add part3/app/services/relationship.py 
git commit -m "create the file that create all the relationship between classes in the db"
git status -s
git add part3/test/Test.sql 
git commit -m "create a SQL file to test the db interaction"
git push origin kraoshin 
cd holbertonschool-h
cd holbertonschool-hbnb/
python -m venv venv
python3 -m venv venv
source venv/bin/activate
cd part3/
pip install requirements.txt 
pip3 install requirements.txt 
sudo install requirements.txt 
install --help
sudo apt-get install flask
pip install flask
pip install flask-restx
pip install flask-bcrypt
pip install requirements.txt 
pip install flask_jwt_extended
pip install flask_sqlalchemy
pip install SQLAlchemy
pip install mysqldb
python3 run.py
pip install -r requirements.txt
python run.py
pip install -r requirements.txt 
python run.py
git status -s
git add *
git commit -m "Commit all the changes I did (I should have commited them one by one my bad)"
git status -s
git add *
git commit -m "delete all pycache folder"
python run.py 
git status -s
python run.py 
cd app/models/
python create_admin.py 
deactivate
python create_admin.py 
python3 create_admin.py 
cd ../..
source venv/bin/activate
cd ../
source venv/bin/activate
cd part
cd part3/
git status -s
python run.py 
cd holbertonschool-hbnb/
source venv/bin/activate
cd part
cd part3/
python run.py 
pwd
cd holbertonschool-hbnb/
cd part3/
ls
cd instance/
ls
cat ../test/Test.sql | mysql -hlocalhost -uroot -p development.db
sudo cat ../test/Test.sql | mysql -hlocalhost -uroot -p development.db
cd
source venv/bin/activate
cd holbertonschool-hbnb/part3/instance/
cat ../test/Test.sql | mysql -hlocalhost -uroot -p development.db
INSERT INTO User (id, first_name, last_name, email, password, is_admin)
VALUES (
); | mysql -hlocalhost -uroot -p development.db
INSERT INTO User (id, first_name, last_name, email, password, is_admin) VALUES ('36c9050e-ddd3-4c3b-9731-9f487208bbc1',  -- ID fixe 'Admin',  -- first_name 'HBnB',  -- last_name 'admin@hbnb.io',  -- email '$2b$12$5y8X5y8X5y8X5y8X5y8X5u',  -- Mot de passe hashé (admin1234) TRUE  -- is_admin);
cd holbertonschool-hbnb/part3/
cd ..
source venv/bin/activate
cd part3/
pip -r install requirements.txt 
pip install -r requirements.txt
python run.py 
deactivate 
cd ..
rm -r part3/
git pull origin kraoshin 
ls
git status -s
git add *
git commit -m "delete everything to start with fresh code"
git add *
git status -s
git add /rm
git add/rm
git restore
cd ../
ls
rm -r holbertonschool-hbnb/
y
git clone https://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@github.com/Kraoshin/holbertonschool-hbnb/tree/main
git clone https://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@github.com/Kraoshin/holbertonschool-hbnb.git
cd holbertonschool-hbnb/
git pull origin kraoshin 
git pull origin cyprien 
python3 -m venv venv
source venv/bin/activate
cd part3/
ls
pip install -r requirements.txt 
python run.py 
pip install -r requirements.txt 
python run.py 
pip install -r requirements.txt 
python run.py 
deactivate
sudo apt install sqlite3
cd ..
source venv/bin/activate
cd part3/
python run.py 
pip install -r requirements.txt 
python run.py 
pip install -r requirements.txt
python run.py 
pip install -r requirements.txt 
python run.py 
cls
clear
git pull origin cyprien 
git status -s
cd ../../
ls
cd
ls
git clone https://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@github.com/Kraoshin/holbertonschool-hbnb.git
cd holbertonschool-hbnb/
ls 
cd part3/
git pull origin cyprien 
deactivate
cd 
source venv/bin/activate
cd holbertonschool-hbnb/part3/
pip install -r requirements.txt 
python run.py 
git status -s
python run.py 
git status -s
python run.py 
ls
git status -s
git add app/models/amenity.py 
git add app/models/place.py 
git add app/models/place_amenity.py 
git add app/models/review.py 
git add app/services/relationship.py 
git add app/api/v1/admin.py 
git add app/models/place_amenity.py 
git commit -m "update all models to increment db"
git push origin k
git push origin kraoshin
cd 
rm -r holbertonschool-hbnb/
y
deactivate 
