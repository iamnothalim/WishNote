const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const feedSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    // filePath : {
    //     type: String,
    // },
    category:
      String,
   

    views: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      required: true,
    },
    // date:{
    //   type:Date,
    // }
  }, { timestamps: true }
  
); 
feedSchema.plugin(autoIncrement.plugin, {
  model: "challengeSchema", //모델명
  field: "challengeIndex", //자동증가할 db컬럼명
  startAt: 1, //시작
  increment: 1, // 증가
});
const Feed = mongoose.model("Feed", feedSchema);
module.exports = Feed;
