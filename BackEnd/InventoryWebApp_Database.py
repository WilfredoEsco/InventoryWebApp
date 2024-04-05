import mysql.connector

# CURSOR settings
Buffered = True

# InventoryWebApp_DB - default name
InventoryWebApp_DB = mysql.connector.connect(
	host = '', # localhost (or if using web server - IP Address)
	user = '', # user account of the server (user@UserPC - just the user portion before the @)
	password = '', # password of the user's account (this should be known)
	database = '' # the name of the database on the server (should already exist)
)

# InventoryWebApp_CURSOR - cursor to execute database fetches
InventoryWebApp_CURSOR = InventoryWebApp_DB.cursor(buffered=Buffered)