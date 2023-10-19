import React from 'react';
import caseStudyPic from './assets/pictures/CaseStudy1.png';
import caseStudyPic2 from './assets/pictures/CaseStudy2.png';
import ourBrands1 from './assets/pictures/OurBrands.png';
import ourBrands2 from './assets/pictures/OurBrands2.png';

const CaseStudies = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h1 className='font-semibold text-4xl py-2 pb-4 text-center'>Case Studies</h1>

      <div className='sm:flex md:flex-row'>
        <img src={caseStudyPic} alt="Marketing Case Study" className='rounded-xl' />
        <img src={caseStudyPic2} alt="Skincare Marketing Case study" className='rounded-xl' />
      </div>


      <div className='py-6'>
        <p>
          Click here for Downloadable version: <a href="/caseStudy.pdf#zoom=125" target="_blank" rel="noopener noreferrer" className='text-blue-500 font-bold'>Case Study</a>
        </p>
      </div>

      <div className='bg-black py-4 pb-16 rounded-3xl bg-blend-color-burn'>
        <h1 className='font-semibold text-4xl py-8 text-center text-white'>Work Done with our Brands</h1>
        <img src={ourBrands2} alt='brand email marketing work' className='rounded-xl px-10 py-16' />
        
      <div className='flex sm:flex-col'>
            <h1 className='font-semibold text-4xl px-8 py-8 text-white'>Work Done with our Brands</h1>
            <img src={ourBrands1} alt='email marketing brands' className='rounded-xl px-10 pt-8 pb-16 w-12.5' />
        </div>

      </div>
    </div>
  );
}

export default CaseStudies;
