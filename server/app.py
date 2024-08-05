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

class Login(Resource):
  def post(self):
    data = request.get_json()
    username = data['username']
    password = data['password']
    user = User.query.filter(User.username == username).first()
    if user:
      if user.authenticate(password):
          return make_response(user.to_dict(rules=()), 200)
      return {'error': "Unauthorized"}, 401
    return {'error': "User Not Found"}, 404 
  
api.add_resource(Login,'/api/login')



class AllUsers(Resource):
    
    def get(self):
        users = User.query.all()
        # for user in users:
        #     print(user.__dict__)  # Print user attributes to debug
        response_body = [user.to_dict(rules=()) for user in users]
        return make_response(jsonify(response_body), 200)
    
    def post(self):
        try:
            # Ensure required fields are present in the request
            name = request.json.get('name')
            password = request.json.get('password')
            username = request.json.get('username')

            if not all([name, username, password]):
                raise ValueError("Missing required fields")

            new_u = User(
                name=name,
                username=username,
            )
            new_u.password_hash = password
            db.session.add(new_u)
            db.session.commit()

            # Assuming to_dict() method is defined in your Mission model
            rb = new_u.to_dict(rules = ('-workouts', '-user_workouts'))
            return make_response(rb, 201)

        except ValueError:
            rb = {
                "errors": ["validation errors"]
                }
            return make_response(rb, 400)

api.add_resource(AllUsers, '/api/users', endpoint='users')

class UserById(Resource):
    def get(self,id):

        user = User.query.filter(User.id == id).first()

        if user:
            response_body = user.to_dict(rules = ())
            return make_response(response_body,200)
        else:
            response_body = {
                "error": "User not found"
            }
            return make_response(response_body,404)
    
    def delete(self, id ):
        user = User.query.filter(User.id == id).first()

        if user:
            db.session.delete(user)
            db.session.commit()
            response_body = {}
            return make_response(response_body, 204)
        else:
            response_body = {
                "error": "User not found"
            }
            return make_response(response_body,404)
    
    def patch(self, id):
        user = User.query.filter(User.id == id).first()

        if user:
            try:
                # Get the data from the PATCH request
                data = request.json

                # Update user attributes if present in the request
                if 'name' in data:
                    user.name = data['name']
                if 'password' in data:
                    user.password = data['password']
                if 'username' in data:
                    user.username = data['username']

                # Commit changes to the database
                db.session.commit()

                # Return the updated user
                response_body = user.to_dict(rules=())
                return make_response(response_body, 200)

            except ValueError:
                response_body = {
                    "error": "Invalid data in the request"
                }
                return make_response(response_body, 400)
        else:
            response_body = {
                "error": "User not found"
            }
            return make_response(response_body, 404)

api.add_resource(UserById,'/api/users/<int:id>')





@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    # combines python and js for monoRepo it is a python web app
    # so in this case pyhon falcititates the js program so its a python program running js not just a js program
    return render_template("index.html")

if __name__ == '__main__':
    app.run(port=5555,debug=True)
