from models import db, User
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request,render_template
import os



#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
migrate = Migrate(app, db)
api = Api(app)

# Views go here!





@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    # combines python and js for monoRepo it is a python web app
    # so in this case pyhon falcititates the js program so its a python program running js not just a js program 
    return render_template("index.html")

if __name__ == '__main__':
    app.run()
