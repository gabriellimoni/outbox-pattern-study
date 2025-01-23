import { EventData } from "../models/event";

export const dispatchEvent = async (eventId: string): Promise<void> => {
  await EventData.startSession().then(async (client) => {
    await EventData.findByIdAndUpdate(
      eventId,
      { dispatched: true },
      {
        session: client,
        new: true,
      }
    ).then((data) => {
      console.log("FindByIdAndUpdate", data);
    });
    /**
     * publish to pubsub...
     * In case of error, throws, then the transaction is aborted.
     */
  });
};
