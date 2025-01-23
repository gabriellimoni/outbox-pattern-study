import { EventData } from "../models/event";

export interface CreateEventData {
  event: string;
  emmitedAt: Date;
  entity: string;
  entityId: string;
  payload: Object;
  version: number;
}
export const createEvent = async (data: CreateEventData): Promise<void> => {
  await EventData.create(data).catch(console.log);
};
