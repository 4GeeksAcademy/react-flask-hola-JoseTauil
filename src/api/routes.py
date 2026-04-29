from flask import request, jsonify, Blueprint
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required
from api.models import db, User

api = Blueprint('api', __name__)

# SIGNUP


@api.route('/signup', methods=['POST'])
def signup():
    data = request.json

    user = User(
        email=data['email'],
        password=generate_password_hash(data['password']),
        is_active=True
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": "Usuario creado"}), 201


# LOGIN
@api.route('/login', methods=['POST'])
def login():
    data = request.json

    user = User.query.filter_by(email=data['email']).first()

    if not user or not check_password_hash(user.password, data['password']):
        return jsonify({"msg": "Credenciales incorrectas"}), 401

    token = create_access_token(identity=user.id)

    return jsonify({"token": token}), 200


# PRIVATE
@api.route('/private', methods=['GET'])
@jwt_required()
def private():
    return jsonify({"msg": "Acceso permitido"}), 200
