import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Breed from '../../../../domain/entities/Breed';
import BreedController from '../../../controllers/BreedController';

// interface IParams {
//   breedName: string;
// }

// interface IProps extends RouteComponentProps<IParams> {
//   breed: Breed;
// }

export const BreedDetails: React.FC = () => {
  const { breedName } = useParams<string>();
  const [selectedBreed, setSelectedBreed] = useState<Breed>(new Breed());

  useEffect(() => {
    async function getBreadList() {
      const breed = await BreedController.getBreedByName(breedName as string);
      setSelectedBreed(breed);
    }
    getBreadList();
  }, [breedName]);

  const [indexImage, setIndexImage] = useState<number>(0);

  const nextImage = () => {
    if (indexImage >= selectedBreed.images.length - 1) {
      setIndexImage(0);
    } else {
      setIndexImage(indexImage + 1);
    }
  };

  const previousImage = () => {
    if (indexImage === 0) {
      setIndexImage(selectedBreed.images.length - 1);
    } else {
      setIndexImage(indexImage - 1);
    }
  };

  return (
    <div>
      <div className='row'>
        <div className='col s12 m8 offset-m2'>
          <h2 className='header center'>{selectedBreed.breedName}</h2>
          <div className='card hoverable'>
            <div className='card-stacked'>
              <div className='card-action center'>
                <div
                  className='waves-effect waves-light btn-large'
                  onClick={previousImage}
                >
                  Précédent
                </div>
                <div
                  className='waves-effect waves-light btn-large'
                  onClick={nextImage}
                >
                  Suivant
                </div>
              </div>
              <div className='card-content center'>
                <img
                  src={selectedBreed.images[indexImage]}
                  alt={selectedBreed.breedName}
                />
              </div>
              <div className='card-action'>
                <Link to='/'>Retour</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <Link
    //     className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    //     to='/'
    //   >
    //     Back to list
    //   </Link>
    //   <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 '>
    //     {selectedBreed.images.map((image, index) => {
    //       return (
    //         <div className='bg-gray-100 flex items-center justify-center py-50 mb-5 mt-5'>
    //           <div className='max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500'>
    //             <div className='p-4'>
    //               <img src={image} alt={selectedBreed.breedName} />
    //             </div>
    //             <div className='flex justify-between p-6'>
    //               <div className='flex items-center space-x-4'>
    //                 <h1 className='text-lg text-gray-900 font-bold'>
    //                   {selectedBreed.breedName}
    //                 </h1>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>
  );
};
