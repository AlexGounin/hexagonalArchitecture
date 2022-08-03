import {
  getBreadList,
  getBreedByName,
  getBreedImage,
} from '../../application/useCases/BreedUseCases';

import ApiBreedRepository from '../Repositories/ApiBreedRepository';
import Breed from '../../domain/entities/Breed';

const api = new ApiBreedRepository();

export default class BreedController {
  static async getAllBreeds(): Promise<Breed[]> {
    return getBreadList(api);
  }

  static async getBreedByName(breedName: string): Promise<Breed> {
    return getBreedByName(api, breedName);
  }

  static async getBreedImage(breedName: string): Promise<string> {
    return getBreedImage(api, breedName);
  }
}
