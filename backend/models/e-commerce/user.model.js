/* 
    There are three lines of code to write mongoose schema
        1. Import it from mongoose
        2. define schema by `new mongoose.Schema({})` & and store it in any variable
        3. Finally, export it by a model name, but when we export by `mongoose.model()` method it will take two params, 
            - In which name we will be set the schema
            - Which schema basis it will stored

*/

// First we will import mongoose from  `mongoose package`
import mongoose from "mongoose";

// After that, we will create our Schema and store it to a new variable
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // we named it userSchema

// After all we will export it like this
export const User = mongoose.model("User", userSchema);

/*
  💡 TIPS
    - What if we'll set the exported model name like this 'users'? is this will create extra s end of the users?
        - So, mongodb algorithm is quite inelegant, wit will make mongoose model name into plural and it will not add extra 's' like this 'userss'
    - What is the standard method to set the model name & why it's standard?
        - So, industry standard is make your exported variable name like mongoose model name. We'll not use plural to set model name, because when we'll take reference a model to another model, it will not look nice. That's why everyone follow a standard rule
*/
