#!/usr/bin/env python3
from api.views import app_views
from model import storage
from flask import jsonify, request, url_for, abort
import json
from flask_cors import CORS, cross_origin


@app_views.route('/reasons', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def reasons():
    """ method will handle requests to retrieve all reasons or create a new reason """

    # check if request is a POST method
    if request.method == 'POST':
        # request body parameters
        req_data = request.get_json()
        # send request data to create new reason obj and return new id
        return_id = storage.new(req_data)
        # save to database with SQLalchemy's commit method
        storage.save()
        return jsonify({'ok': True, 'id': return_id}), 302
    # check if request is a GET method
    elif request.method == 'GET':
        # retrieve all reasons using query method
        all_objs = storage.all()
        return jsonify(all_objs), 200
    else:
        return jsonify({"ok": False, "message": "Error"}), 404


@app_views.route('/reasons/<reason_id>', methods=['GET', 'DELETE', 'PUT'])
def get_reason(reason_id=None):
    """ This method will to handle CRUD operations on each reason"""

    # query db if id exist and retrieve new query object
    reason_obj = storage.get(reason_id)
    # abort operation if not found with error message
    if reason_obj is None:
        abort(404, 'Not found')

    # check if request is a GET method
    if request.method == 'GET':
        # get all resource type
        reason_obj = reason_obj.__dict__
        # remove extra property from dict included when retrieved from ORM
        del reason_obj['_sa_instance_state']
        return jsonify({"ok": True, "data": reason_obj}), 200
    # check if request is a DELETE method
    elif request.method == 'DELETE':
        # this calls the delete method from my db engine
        storage.delete(reason_id)
        return jsonify({"ok": True}), 200
    # check if request is a PUT method
    elif request.method == 'PUT':
        # get JSON format of request body
        new_data = request.get_json()
        if not new_data:
            abort(400, 'Not a JSON')
        # check is id attribute exist, remove 
        storage.update(reason_id, new_data)
        return jsonify({"ok": True, "data": new_data}), 200
    else:
        return jsonify({"ok": False, "message": "Error"}), 404
