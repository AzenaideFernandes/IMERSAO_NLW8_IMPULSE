import { prisma } from "../../prisma";
import { FeedbacksCreateData, FeedbacksRepository } from "../feedbacks-repositoriy";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
 async create({ type, comment, screenshot }: FeedbacksCreateData) {
  await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  });
 }
}