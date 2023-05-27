print("Started adding the users and roles...");

db = db.getSiblingDB("culherdb");

db.createCollection("log");
db.createCollection("roles");

db.log.insertOne({ message: "Database created" });

db.roles.insertMany([
  { name: "ROLE_USER" },
  { name: "ROLE_MODERATOR" },
  { name: "ROLE_ADMIN" },
]);

db.log.insertOne({ message: "Roles created" });

db.createUser({
  user: "root",
  pwd: "root",
  roles: [
    {
      role: "dbOwner",
      db: "culherdb",
    },
  ],
});

db.log.insertOne({ message: "Users created" });

print("End adding the user roles");
