from flask import Flask

# Server settings
Host = '0.0.0.0'
Port = 7000
Debug = True

# Create the InventoryWebApp server application
app = Flask(__name__)

# Test route - URL = '/test_route'
@app.route('/test_route')
def Test_Route():
    return 'The server test is successful. InventoryWebApp server running.'

# Run the InventoryWebApp Server application
if __name__ == '__main__':
    app.run(host=Host, port=Port, debug=Debug)