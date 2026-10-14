conncet to db first for that we use mongoose which willl help to connect with cluster

createdb > export thatdb > connect db > then start server port

schema in mongoose in models folder
eg User Models ...like User collection what fields they have
const userSchema = new : mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
}) 

const userModel = mongoose.model("User", userSchema);
module.export = userModel
what this line is saying is...//to use this schema defination we need to convert our schema into model
 
 create User schema > create User model > new instances


 connectDB connect
 schema bavala
 model export kel
 get this model in app
 eg:
   const user = new Users({ //new instance of the user model
    firstName: "Krishna",
    lastName: "Vasudev",
    emailId: "krish9@.gamil.com",
    gender: "male",
  });

  but ha data mala send kuthe krayach aahe...well tya sathi me api create keli eg /signup post req
  ani tyachya handler function madhe mi user la define kel
  src\app.js
 
app.post("/signup", async (req, res) => {
  //create new instance of the User Model
  const user = new Users({
    firstName: "Krishna",
    lastName: "Vasudev",
    emailId: "krish9@.gamil.com",
    gender: "male",
  });

  try {
    await user.save();
    res.send("User added Successfully");
  } catch (error) {
    console.error("Error Saving Users", error.message);
    res.status(500).send("failed to add user");
  }
});

Make API call from Postman
go to postman..call post sign up

then check into mongoose compass app ur new added data will be visible over there
🔹 Why it shows up under devtinder
Your connection string points to the devtinder database.

When you call mongoose.model("Users", userSchema), Mongoose says:

“Okay, I’ll create a model called Users. Behind the scenes, I’ll map it to the users collection in the devtinder database.”

That’s why in Compass you see devtinder → users.

🔹 Why it shows up under devtinder
Your connection string points to the devtinder database.

When you call mongoose.model("Users", userSchema), Mongoose says:

“Okay, I’ll create a model called Users. Behind the scenes, I’ll map it to the users collection in the devtinder database.”

That’s why in Compass you see devtinder → users.

✅ If you want to control the collection name
You can override Mongoose’s default pluralization by passing a third argument:

js
module.exports = mongoose.model("Users", userSchema, "Users");
Here:

Model name = "Users"

Schema = userSchema

Collection name = "Users" (exactly as you specify, no pluralization)






