const mongoose = require("mongoose")
const Schema = mongoose.Schema

const propertySchema = new Schema({

    title : {
        type :String,
    },
    description :{
        type:String,
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:"State",
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:"City",
    },
    pincodeId : {
        type:Schema.Types.ObjectId,
        ref:"Area"
    }

})

module.exports = mongoose.model("Property",propertySchema)