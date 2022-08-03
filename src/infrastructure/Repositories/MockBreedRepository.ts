import Breed from '../../domain/entities/Breed';
import BreedRepository from '../../domain/interfaces/BreedRepository';

export default class MockBreedRepository implements BreedRepository {
  getImageByBreed(breed: string): Promise<string> {
    return new Promise((resolve) =>
      resolve('https://images.dog.ceo/breeds/beagle/n02088364_876.jpg')
    );
  }

  async getList(): Promise<Breed[]> {
    const list: Breed[] = [];
    list.push(
      new Breed(
        'hound-afghan',
        [],
        [
          'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
          'https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg',
          'https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg',
        ]
      )
    );
    list.push(
      new Breed(
        'beagle',
        [],
        [
          'https://images.dog.ceo/breeds/beagle/1271553739_Milo.jpg',
          'https://images.dog.ceo/breeds/beagle/n02088364_8713.jpg',
          'https://images.dog.ceo/breeds/beagle/n02088364_876.jpg',
        ]
      )
    );
    return new Promise((resolve) => resolve(list));
  }

  async getByName(name: string): Promise<Breed> {
    let buldog = new Breed(
      'beagle',
      [],
      [
        'https://images.dog.ceo/breeds/beagle/1271553739_Milo.jpg',
        'https://images.dog.ceo/breeds/beagle/n02088364_8713.jpg',
        'https://images.dog.ceo/breeds/beagle/n02088364_876.jpg',
      ]
    );
    return new Promise((resolve) => resolve(buldog));
  }

  getBySubbreed(name: string): Promise<Breed[]> {
    let subBreeds: Breed[] = [];
    if (name !== 'bulldog') {
      return new Promise((resolve) => resolve(subBreeds));
    }

    let bulldog = new Breed(
      name,
      ['boston', 'english', 'french'],
      [
        'https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg',
        'https://images.dog.ceo/breeds/bulldog-boston/n02096585_10380.jpg',
        'https://images.dog.ceo/breeds/bulldog-boston/n02096585_10596.jpg',
      ]
    );
    subBreeds = bulldog.subBreeds.map((breedName) => {
      return new Breed(breedName, [], []);
    });
    return new Promise((resolve) => resolve(subBreeds));
  }
}
