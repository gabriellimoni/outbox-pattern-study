import * as mongoose from "mongoose";
await mongoose.connect(String(process.env.MONGOOSE_CONNECTION_STRING));
console.log("init");
