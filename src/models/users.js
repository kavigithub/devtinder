const monggose = require("mongoose");

//define the sape of documents and what all things u will store in DB
const usersSchema = new monggose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});

//to use this schema defination we need to convert our schema into module
/* const usersModel = monggose.model("Users", usersSchema);
module.exports = usersModel;
 */
module.exports = monggose.model("Users", usersSchema);
//model name : Users
/* Mongoose automatically pluralizes and lowercases the model name to decide the collection name.

"Users" → "users"

"Person" → "people"

"Book" → "books" 
So even though you never explicitly wrote "users" in your code, Mongoose created/connected to the users collection inside your devtinder database.

Model name → developer-friendly name you use in code (Users).

Collection name → actual MongoDB collection, auto-pluralized unless you override.

That’s why your users collection appeared even though you didn’t mention it explicitly


*/
