const mongoose  = require('mongoose');
const validator = require('validator');
const bcrpyt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('email incorrect');
            }
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    tokens: [
        {
            token:{
                type:String,
                required: true
            }
          
        }
    ]

}
);

userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({_id : user._id.toString()},'yeahthisisawesomme');
    user.tokens = user.tokens.concat({token});
    return token;
}


//login functionality - find by credentials of login(search database)
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        
        throw new Error('Unable to login')
    }
    
    const isMatch = await bcrpyt.compare(password, user.password)
    
    if (!isMatch) {
        
        throw new Error('Unable to login')
    }
   
    return user
}




//added encryption functionality to password
userSchema.pre('save', async function(next){

    const user = this;
    if (user.isModified('password')) {
        user.password =  await bcrpyt.hash(user.password,8);
    }
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;