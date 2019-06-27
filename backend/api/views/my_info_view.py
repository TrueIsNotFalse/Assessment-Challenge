#!/usr/bin/env python3
"""
my information view
"""
from flask import jsonify, request
from api.views import app_views


@app_views.route('/myinfo', methods=['GET'])
def myinfo():
        """method to return JSON of my information"""

        if request.method == 'GET':
                my_info = {"Full-name": "Heindrick Cheung",
                           "Title": "Software Engineer",
                           "School Attended": "Holberton School of Engineering",
                           "Links": [
                                  "www.linkedin.com/heindrick-cheung",
                                  "www.github.com/hcheung01",
                                  "www.medium.com/heindrickcheung",
                                  "www.twitter.com/heindrickcheung"
                                  ],
                           "contact": {
                               "phone": "415-688-0153",
                               "city": "San Francisco",
                               "email": "Hcheung01@gmail.com"
                           },
                           "Interests": [
                             "API development and business logic",
                             "Data collection, analysis and storage",
                             "Front-end responsive web designs and development",
                             "Machine Learning"
                            ],
                           "Software": [
                             {"Proficient": [
                               "Javascript",
                               "Python",
                               "C",
                               "HTML",
                               "CSS"]},
                             {"Familiar": [
                               "Bash/Shell",
                               "Flask/Jinja2",
                               "MySQL/ORM",
                               "Node/Express",
                               "jQuery/AJAX"]}],
                           "Programming Coursework": [
                             'Algorithms & Data Structures',
                             'Object Oriented Programming',
                             'Low-level and Higher Level programming',
                             'Operating Systems', 'Networks',
                             'Web Development',
                             'System Engineering and Devops',
                             'Web infrastructure']}
                return jsonify(my_info), 200
