import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type :String,
    required : true
},
  address: {
      type :String,
      required : true
  },
  age: {
    type: Number,
    min: 0,
    max: 120,
  },
  email: String,
  updated: {
    type: Date,
    default: Date.now,
  },
});

ContactSchema.path('address').validate((v)=>{
    if(v.length>50||v.length<5){
        return false;
    }
    return true;

});

ContactSchema.path('email').validate((email) => {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email);
  }, 'A valid e-mail address is required');

export default mongoose.model('Contact', ContactSchema);