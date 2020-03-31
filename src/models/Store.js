const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const StoreSchema = new mongoose.Schema({
    client_id:
    {
        type: String,
        require: true
    },

    client_secret:
    {
        type: String,
        require: true
    },

    grant_type:
    {
        type: String,
        require: true
    },

    username:
    {
        type: String,
        require: true
    },

    password:
    {
        type: String,
        require: true
    },

    createdAt:
    {
        type: Date,
        default: Date.now
    }
});

StoreSchema.pre('save', async function (next){
    let store = this;
    if (!store.isModified('password')) return next();

    await bcrypt.hash(store.password, 10, (err, encrypted) => {
        store.password = encrypted;
        return next();
    })
})

module.exports = mongoose.model('Store', StoreSchema);