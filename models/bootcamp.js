const mongoose = require("mongoose");

const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    unqiue: true,
    required: [true, 'Please add a name'],
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 50 characters'],
  },
  website: {
    type: String,
    match: [/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi ,'Please use a valid URL with HTTP']
    
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number cannot be longer than 20 characters'],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  careers:{
    // Array of strings
    type: [String],
    required: true,
    enum: [
        'Web Development',
        'Mobile Development',
        'UI/UX',
        'Data Science',
        'Business',
        'Other'
    ]
  },
  careers_others:String,
  averageRating:{
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating must can not be more than 5']
  },
 averageCost: Number,
photo:{
  type: String,
  default: 'no-photo.jpg'
},
housing:{
  type: Boolean,
  default: false
},
jobAssistance:{
  type: Boolean,
  default: false
},
jobAssistance:{
  type: Boolean,
  default: false
},
jobGuarantee:{
  type: Boolean,
  default: false
},
acceptGi:{
  type: Boolean,
  default: false
},
// createdAt:{
//   type: Date,
//   default: Date.now
// },
// updatedAt:{
//   type: Date,
//   default: Date.now
// },

},
{timestamps:true}
)

module.exports = mongoose.model("Bootcamp", BootcampSchema);
