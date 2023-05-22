import mysql.connector

international_db = mysql.connector.connect(
	host = "35.239.193.136",
	user = "root",
	password = "IntAP0271!",
	database = "internationalap"
	)
international_cursor = international_db.cursor(buffered=True)