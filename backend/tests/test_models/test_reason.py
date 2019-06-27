#!/usr/bin/env python3
"""
Unit Test for Reason Class
"""
from datetime import datetime
import inspect
import json
import model
from os import environ, stat
import pep8
import unittest

Reason = model.reason_model.Reason


class TestReasonDocs(unittest.TestCase):
        """Class for testing Reason docs"""

        # get all functions inside class
        all_funcs = inspect.getmembers(Reason, inspect.isfunction)

        @classmethod
        def setUpClass(cls):
                print('\n\n.................................')
                print('..... Testing Documentation .....')
                print('........   Reason Class   ........')
                print('.................................\n\n')
          
        def test_doc_file(self):
                """... documentation for the file"""
                expected = '\nReason Class from model Module\n'
                actual = model.reason_model.__doc__
                self.assertEqual(expected, actual)

        def test_doc_class(self):
                """... documentation for the class"""
                expected = 'Reason class handles all application reasons'
                actual = Reason.__doc__
                self.assertEqual(expected, actual)

        def test_all_function_docs(self):
                """... tests if ALL DOCS in all functions in db_storage file"""
                all_functions = TestReasonDocs.all_funcs
                for function in all_functions:
                    self.assertIsNotNone(function[1].__doc__)

        def test_pep8_reason(self):
                """... reason_model.py conforms to PEP8 Style"""
                pep8style = pep8.StyleGuide(quiet=True)
                errors = pep8style.check_files(['model/reason_model.py'])
                self.assertEqual(errors.total_errors, 0, errors.messages)

        def test_file_is_executable(self):
                """... tests file if correct permissions so user can exec """
                file_stat = stat('model/reason_model.py')
                permissions = str(oct(file_stat[0]))
                actual = int(permissions[5:-2]) >= 5
                self.assertTrue(actual)


class TestReasonInstances(unittest.TestCase):
        """testing for class instances"""
        @classmethod
        def setUpClass(cls):
                print('\n\n.................................')
                print('....... Testing Functions .......')
                print('.........  Reason Class  .........')
                print('.................................\n\n')
          
        def setUp(self):
                """initializes new reason for testing"""
                self.reason = Reason()

        def test_instantiation(self):
                """... checks if Reason is properly instantiated"""
                self.assertIsInstance(self.reason, Reason)

        def test_to_string(self):
                """... checks if BaseModel is properly casted to string"""
                my_str = str(self.reason)
                my_list = ['name', 'reason', 'created_at']
                actual = 0
                for sub_str in my_list:
                    if sub_str in my_str:
                        actual += 1
                self.assertTrue(3 == actual)

        def test_instantiation_created_at(self):
                """... should have created attribute"""
                self.reason = Reason()
                my_str = str(self.reason)
                actual = 0
                if 'created_at' in my_str:
                    actual += 1
                self.assertTrue(1 == actual)

        def test_name_attribute(self):
                """... add name attribute"""
                self.reason.name = 'BERKSHIRE'
                if hasattr(self.reason, 'name'):
                    actual = self.reason.name
                else:
                    actual = ''
                expected = 'BERKSHIRE'
                self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main
