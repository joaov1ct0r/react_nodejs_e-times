import { PrismaClient } from "@prisma/client";
import IJogador from "./IJogador";

export default interface ICreateJogadorRepository {
  execute(nome: string, idade: number, time_id: number): Promise<IJogador>;
}
