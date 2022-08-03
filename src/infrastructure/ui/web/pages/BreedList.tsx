import Breed from '../../../../domain/entities/Breed';
import BreedController from '../../../controllers/BreedController';
import { BreedItem } from '../components/Breed/BreedItem';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const BreedList = () => {
  const [breeds, setBreeds] = useState<any[]>([]);
  const [filteredBreeds, setFilteredBreads] = useState<any[]>([]);

  useEffect(() => {
    async function getBreadList() {
      const breedList = await BreedController.getAllBreeds();
      setBreeds(breedList);
      setFilteredBreads(breedList);
    }
    getBreadList();
  }, []);

  const handleSearch = (e: any) => {
    if (e.target.value.length > 2) {
      let filteredBreeds = breeds.filter((breed: Breed) => {
        return breed.breedName
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setFilteredBreads(filteredBreeds);
    } else {
      setFilteredBreads(breeds);
    }
  };

  return (
    <div className='center'>
      <div className='container'>
        <div className='row'>
          <input
            type='text'
            onChange={handleSearch}
            placeholder='please type the breed that you are looking for'
            className='h-10  w-full text-green-400 px-3 border border-green-800'
          />
          {filteredBreeds.map((breed: Breed) => {
            return <BreedItem key={breed.id} breed={breed} />;
          })}
        </div>
      </div>
    </div>
  );
};
