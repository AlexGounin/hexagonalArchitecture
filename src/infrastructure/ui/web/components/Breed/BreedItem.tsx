import './BreedItem.css';

import React, { FunctionComponent, useEffect, useState } from 'react';

import Breed from '../../../../../domain/entities/Breed';
import BreedController from '../../../../controllers/BreedController';
import { useNavigate } from 'react-router-dom';

interface IProps {
  breed: Breed;
  borderColor?: string;
}

export const BreedItem: FunctionComponent<IProps> = ({
  breed,
  borderColor = '#009688',
}) => {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBreedImage() {
      const image = await BreedController.getBreedImage(breed.breedName);
      breed.defaultImage = image;
      setLoading(false);
    }
    getBreedImage();
  }, [breed]);

  const showBorder = () => {
    setColor(borderColor);
  };
  const hideBorder = () => {
    setColor('#f5f5f5');
  };

  const goToBreed = (breedName: string) => {
    navigate(`/details/${breedName}`);
  };

  return (
    <div
      className='col s6 m4'
      onClick={() => {
        goToBreed(breed.breedName);
      }}
      onMouseEnter={showBorder}
      onMouseLeave={hideBorder}
    >
      <div className='card horizontal' style={{ borderColor: color }}>
        <div className='card-image'>
          {loading ? (
            <div className='text-center'>Loading...</div>
          ) : (
            <img
              src={breed.defaultImage}
              alt={breed.breedName}
              className='imgSize'
            />
          )}
        </div>
        <div className='card-stacked'>
          <div className='card-content'>
            <p>{breed.breedName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
