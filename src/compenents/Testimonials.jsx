import React from 'react';
import caseStudyPic from './assets/pictures/CaseStudy1.png';
import caseStudyPic2 from './assets/pictures/CaseStudy2.png';
import ourBrands1 from './assets/pictures/OurBrands.png';
import ourBrands2 from './assets/pictures/OurBrands2.png';



  

const CaseStudies = () => {
  return (
        <div className="w-full bg-white py-16 px-4">
      <h1 className='text-[#00df9a] font-bold text-4xl text-center'>Case Studies</h1>

    <div className='flex'>
      <a href="/caseStudy.pdf#zoom=125" target="_blank" rel="noopener noreferrer">
          <img src={caseStudyPic} alt="Marketing Case Study"/>
          </a>
          <a href="/caseStudy.pdf#zoom=125" target="_blank" rel="noopener noreferrer">
          <img src={caseStudyPic2} alt="Skincare Marketing Case study"/>
          </a>
    </div>


        </div>

  )
     
}

export default CaseStudies;
