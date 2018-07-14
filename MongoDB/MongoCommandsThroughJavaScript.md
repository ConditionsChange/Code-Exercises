### Make sure mongodb server is running:
mongod

### Make sure to use the command "mongo", not "node" to run javascript files. Using the "mongo" command will automatically connect to the mongo server. No need to connect to the server again in the script.
mongo queries.js

### Inside your script (queries.js in this case) make sure to use the following commands):
get inside mongodb > multiple databases > collections > documents

#### This is the same as creating a new database or switching to a new database (use database_name)
db = db.getSiblingDB('classroom')

db.{collectionname}.insert