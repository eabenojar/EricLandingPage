var mongoose = require('mongoose');

var emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  }
});




Email = mongoose.model('Email', emailSchema);


module.exports = {
    Email: Email
};
