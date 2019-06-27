#!/usr/bin/env python3
from flask import Blueprint
app_views = Blueprint('app_views', __name__, url_prefix='/api')
from api.views.reasons_view import *
from api.views.my_info_view import *
