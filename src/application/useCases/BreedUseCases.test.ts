//write units test to check BreedUseCases

import {
  getBreadList,
  getBreedByName,
  getBreedImage,
  getSubBreedsFromBreed,
} from './BreedUseCases';

import ApiBreedRepository from '../../infrastructure/Repositories/ApiBreedRepository';

// import MockBreedRepository from '../../infrastructure/Repositories/MockBreedRepository';



// const api = new MockBreedRepository();
const api = new ApiBreedRepository();

describe('BreedUseCases', () => {
  it('should be defined', () => {
    expect(getBreadList).toBeDefined();
    expect(getBreedByName).toBeDefined();
    expect(getBreedImage).toBeDefined();
    expect(getSubBreedsFromBreed).toBeDefined();
  });

  it('should return a list of breeds', async () => {
    const result = await getBreadList(api);
    let expected = result.length;
    expect(expected).toBeGreaterThan(0);
  });

  it('should return a breed by name', async () => {
    const result = await getBreedByName(api, 'beagle');
    let expected = result.breedName;
    expect(expected).toBe('beagle');
  });

  it('should return a breed image string', async () => {
    const result = await getBreedImage(api, 'beagle');
    let expected = result;
    expect(expected).toContain('https://images.dog.ceo/breeds/beagle/');
  });

  it('should return a list of subbreedss when their is', async () => {
    const result = await getSubBreedsFromBreed(api, 'bulldog');
    let expected = result.length;
    expect(expected).toBeGreaterThan(0);
  });

  it('should return an empty list when their is no subbreed', async () => {
    const result = await getSubBreedsFromBreed(api, 'akita');
    let expected = result.length;
    expect(expected).toEqual(0);
  });
});
