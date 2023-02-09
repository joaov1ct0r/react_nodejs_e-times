import IGetTimesRepository from "../../interfaces/time/IGetTimesRepository";

export default class GetTimesService {
  private readonly getTimesRepository: IGetTimesRepository;

  constructor(getTimesRepository: IGetTimesRepository) {
    this.getTimesRepository = getTimesRepository;
  }

  async execute() {
    const times = await this.getTimesRepository.execute();

    return times;
  }
}
