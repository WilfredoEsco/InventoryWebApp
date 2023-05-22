from flask import Flask, request, redirect, jsonify, make_response
from WarehouseBEDatabase import *
import json

Debug = True
Host = '127.0.0.1'
Port = 5000

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return "International Used Autoparts!"

@app.route('/users', methods=['GET'])
def users_test():
	international_cursor.execute('SELECT * FROM vehicles_at_lot where stk_number =1398;')
	data = international_cursor.fetchone()
	print(data)
	return make_response(jsonify({'UserData': data}), 200)

if __name__ == '__main__':
	app.run(debug=Debug, host=Host, port=Port)