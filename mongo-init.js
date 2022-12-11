print("Started adding the users.");

db = db.getSiblingDB("mernproject");

db.log.insertOne({ "message": "Database created." });

db.createUser({
    user: 'root',
    pwd: 'root',
    roles: [
        {
            role: 'dbOwner',
            db: 'mernproject',
        },
    ],
});

db.log.insertOne({ "message": "Users created." });

print("End adding the user roles.");