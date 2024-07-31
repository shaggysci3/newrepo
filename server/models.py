from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from config import db, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property



# metadata = MetaData(naming_convention=convention)

# db = SQLAlchemy(metadata=metadata)



class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    _password_hash = db.Column(db.String)
    name = db.Column(db.String)

    # Add relationship outgoing

    @hybrid_property
    def password_hash(self):
      raise Exception('Password hashes may not be viewed')
    @password_hash.setter
    def password_hash(self, password):
      password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
      self._password_hash = password_hash.decode('utf-8')
    def authenticate(self, password):
      return bcrypt.check_password_hash(
      self._password_hash, password.encode('utf-8')
      )
    def __repr__(self):
        return f'<User {self.id}: {self.name}>'
    
    @validates('name')
    def validate_name(self,attr,value):
        if value:
            return value
        else:
            raise ValueError('please enter a name')
    
    