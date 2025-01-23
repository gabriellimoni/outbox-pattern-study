import "./database";
import { EventData } from "./models/event";
import { dispatchEvent } from "./utils/dispatchEvent";

EventData.watch().on("change", async (data) => {
  console.log("EVENT", data);
  if (data.operationType != "insert") return;

  await dispatchEvent(data.fullDocument._id);
});
