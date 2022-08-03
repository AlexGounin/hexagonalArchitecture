import Breed from '../../domain/entities/Breed';
import BreedRepository from '../../domain/interfaces/BreedRepository';

export default class ApiBreedRepository implements BreedRepository {
  async getList(): Promise<Breed[]> {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    const breeds = Object.keys(data.message).map(
      (breedName) => new Breed(breedName, data.message[breedName])
    );
    return breeds;
  }

  async getByName(breed: string): Promise<Breed> {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    return new Breed(breed, [], Array.from(data.message));
  }

  async getBySubbreed(breedName: string): Promise<Breed[]> {
    const response = await fetch(`https://dog.ceo/api/breed/${breedName}/list`);
    const data = await response.json();
    const subBreedsName = data.message;

    const subBreeds: Breed[] = subBreedsName.map(
      (breedName: string | undefined) => {
        return new Breed(breedName, [], []);
      }
    );
    return new Promise((resolve) => resolve(subBreeds));
  }

  async getImageByBreed(breed: string): Promise<string> {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/1`
    );

    const data = await response.json();

    return data.message[0];
  }
}
