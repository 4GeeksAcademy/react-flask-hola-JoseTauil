from flask import Flask, request, jsonify, Blueprint
from api.models import db, User
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)

@api.route('/signup', methods=['POST'])
def handle_signup():
    body = request.get_json()
    # Aquí iría tu lógica para guardar en la base de datos
    return jsonify({"msg": "Usuario creado correctamente"}), 201

@api.route('/login', methods=['POST'])
def handle_login():
    body = request.get_json()
    email = body.get("email")
    password = body.get("password")
    
    # Aquí validas si el usuario existe...
    # Si es válido, generas el token:
    access_token = create_access_token(identity=email)
    return jsonify({"token": access_token}), 200