const mongoose  = require('mongoose');
const validator = require('validator');
const bcrpyt = require('bcryptjs');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
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
    }

}
);


userSchema.pre('save', async function(next){

    const user = this;
    if (user.isModified('password')) {
        user.password =  await bcrpyt.hash(user.password,8);
    }
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;