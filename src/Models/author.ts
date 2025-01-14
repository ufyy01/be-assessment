import mongoose from "mongoose";
import Joi from "joi";

const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: 3,
        required: true
    },
    lastName: {
        type: String,
        minlength: 3,
        required: true
    }
})

const Author = mongoose.model('Author', authorSchema)

// Joi validator
interface authorDets {
    firstName: string;
    lastName: string;
}

function validateAuthor(author: authorDets) {
    const schema = Joi.object({
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required()
    })
    return schema.validate(author)
}

export { Author, validateAuthor }