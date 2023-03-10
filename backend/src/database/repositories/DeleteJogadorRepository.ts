import IDeleteJogadorRepository from "../../interfaces/IDeleteJogadorRepository";
import prismaClient from "../prismaClient";

export default class DeleteJogadorRepository
  implements IDeleteJogadorRepository
{
  async execute(id: number) {
    const jogador = await prismaClient.jogador.delete({
      where: { id },
    });

    return jogador;
  }
}
