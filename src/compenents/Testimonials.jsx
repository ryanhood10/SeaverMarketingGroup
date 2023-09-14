import React from 'react';

const testimonials = [
  { text: "I'm amazed by the impact of your email marketing campaigns! The way you navigate through the digital landscape and optimize our online presence is truly remarkable. Our website has never performed better.", author: "Samantha" },
  { text: "The customer service team at this company is exceptional. I had inquiries about various online strategies, and they provided patient guidance, helping me make the right choices for our digital endeavors. The solutions they've provided have become invaluable assets to our business.", author: "Alex" },
  { text: "The technological prowess exhibited by this company is outstanding. The way they interact with our brand's essence and the online world is mind-boggling. My team is fascinated, and I'm impressed by the innovation driving these results.", author: "Daniel" },
  { text: "This website has revolutionized our approach to digital presence. The range of services offered, from strategic campaigns to top-notch website creation, is impressive. I've endorsed this platform to all my colleagues.", author: "Emily" },
  { text: "I engaged their services to enhance my parents' small business, and it has brought them remarkable growth and online companionship. It's like having a trusted partner. Thank you for providing such impactful solutions.", author: "Grace" },
  { text: "As a technology enthusiast, I'm constantly seeking cutting-edge solutions. These strategies exceeded my expectations. They're not only effective but also artistically crafted. They're like a blend of technology and art!", author: "Ethan" },
  // Add more testimonials as needed
];

  

const CaseStudies = () => {
  return (
        <div className="w-full bg-white py-16 px-4">
      <h1 className='text-[#00df9a] font-bold text-4xl text-center'>Case Studies</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-4'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='bg-white border rounded-xl shadow-gray-600 shadow-md overflow-hidden hover:shadow-md transition duration-800'
          >
            <div className='p-4'>
              <p className='font-bold text-lg mb-2 text-black'>" {testimonial.text} "</p>
              <p className='font-bold text-purple-700'>- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudies;
