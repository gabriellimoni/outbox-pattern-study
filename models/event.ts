import * as mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    emmitedAt: { type: Date, required: true },
    event: { type: String, required: true },
    payload: { type: Object, required: true },
    entity: { type: String, required: true },
    entityId: { type: String, required: true },
    version: { type: Number, required: true },

    dispatched: { type: Boolean, required: true, default: false },
  },
  {
    collection: "events",
    versionKey: "",
  }
);

eventSchema.index(
  {
    entityId: 1,
    version: 1,
  },
  {
    unique: true,
  }
);

export type EventData = mongoose.InferSchemaType<typeof eventSchema>;
export const EventData = mongoose.model("EventData", eventSchema);
