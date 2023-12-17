# There are three lines of code to write mongoose schema

1. Import it from mongoose.
2. define _**schema**_ by `new mongoose.Schema({})` & and store it in any variable.
3. Finally, export it by a model name, but when we export by `mongoose.model()` method it will take two params,
   - In which name we will be set the schema
   - Which schema basis it will stored

## See an example

```js
// First we will import mongoose from  `mongoose package`
import mongoose from "mongoose";

// Second we will create new schema by new mongoose.Schema({})
new mongoose.Schema({});
// now we will store it in a variable
const userSchema = new mongoose.Schema({});

// Finally we will export it
export const User = mongoose.model("User", userSchema); // mongoose.model() method will take two params. One, Which name we want to stored schema in db, what type schema it will follow

/*
  💡 TIPS INTERVIEW QUESTIONS
    - What if we'll set the exported model name like this 'users'? is this will create extra s end of the users?
        - So, mongodb algorithm is quite inelegant, wit will make mongoose model name into plural and it will not add extra 's' like this 'userss'
    - What is the standard method to set the model name & why it's standard?
        - So, industry standard is make your exported variable name like mongoose model name. We'll not use plural to set model name, because when we'll take reference a model to another model, it will not look nice. That's why everyone follow a standard rule
*/
```
