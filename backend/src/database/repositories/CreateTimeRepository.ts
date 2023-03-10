import ICreateTimeRepository from "../../interfaces/ICreateTimeRepository";
import prismaClient from "../prismaClient";

export default class CreateTimeRepository implements ICreateTimeRepository {
  async execute(nome: string) {
    const time = await prismaClient.time.create({
      data: {
        nome,
      },
    });

    return time;
  }
}
