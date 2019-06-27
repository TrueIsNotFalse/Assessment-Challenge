#!/usr/bin/python3
"""
Unit Test for BaseModel Class
"""
import unittest
from datetime import datetime
from model import *
import inspect
from os import environ, stat
import pep8
from model.engine.db import Dbstorage


class TestDbstorageDocs(unittest.TestCase):
    """ Class for testing BaseModel docs """

    all_funcs = inspect.getmembers(Dbstorage, inspect.isfunction)

    @classmethod
    def setUpClass(cls):
        """ Setup method for class """
        print('\n\n.................................')
        print('..... Testing Documentation .....')
        print('..... For DB Storage Class .....')
        print('.................................\n\n')

    def tearDownClass():
        """... tidies up the tests removing storage objects"""
        pass

    def test_doc_file(self):
        """... documentation for the file"""
        expected = ' Database engine '
        actual = db.__doc__
        self.assertEqual(expected, actual)

    def test_doc_class(self):
        """... documentation for the class"""
        expected = ('\n    handles long term storage of all class instance'
                    's\n    ')
        actual = storage.__doc__
        self.assertEqual(expected, actual)

    def test_all_function_docs(self):
        """... tests for ALL DOCS for all functions in db file"""
        all_functions = TestDbstorageDocs.all_funcs
        for function in all_functions:
            self.assertIsNotNone(function[1].__doc__)

    def test_pep8_db(self):
        """... db.py conforms to PEP8 Style"""
        pep8style = pep8.StyleGuide(quiet=True)
        errors = pep8style.check_files(['model/engine/db.py'])
        self.assertEqual(errors.total_errors, 0, errors.messages)

    def test_file_is_executable(self):
        """... tests if file has correct permissions so user can execute"""
        file_stat = stat('model/engine/db.py')
        permissions = str(oct(file_stat[0]))
        actual = int(permissions[5:-2]) >= 5
        self.assertTrue(actual)


class TestTracebackNullError(unittest.TestCase):
    """testing for throwing Traceback erros:
    missing attributes that Cannot be NULL"""

    @classmethod
    def setUpClass(cls):
        """sets up the class for this round of tests"""
        print('\n\n....................................')
        print('.......... Testing Dbstorage .......')
        print('...... Trying to Throw Errors ......')
        print('....................................\n\n')

    def tearDownClass():
        """tidies up the tests removing storage objects"""
        pass

    def tearDown(self):
        """tidies up tests that throw errors"""
        pass

    def test_reason_no_name(self):
        """... checks to create a reason with no name"""
        with self.assertRaises(Exception) as context:
            s = Reason()
            s.save()
        self.assertFalse('"Column \'name\' can be null"'
                         in str(context.exception))

    def test_save_reason_without_reason_(self):
        """... checks to create a reason with invalid reason"""
        with self.assertRaises(Exception) as context:
            s = Reason(name="NA")
            s.save()
        self.assertFalse('"Column \'reason\' cannot be null"'
                         in str(context.exception))

    def test_reason_save(self):
        """... checks to create a reason then retrieve from db"""

        fake_data = {"name": "FAKE NAME", "reason": "FAKE REASON"}
        storage.new(fake_data)
        storage.save()

        all_objs = storage.all()
        for o in all_objs:
            if o.get('name') == fake_data.get('name') and\
              o.get('reason') == fake_data.get('reason'):
                del fake_data['name']
                del fake_data['reason']
        self.assertEqual(0, len(fake_data))

if __name__ == '__main__':
    unittest.main
