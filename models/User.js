// require mongoose ODM
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post',
            },
        ],
        favoriteGames: [
            {
                type: Number
            }
        ]
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', UserSchema)
