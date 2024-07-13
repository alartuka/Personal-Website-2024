
import IMG1 from './ProPy_mockup.png';
import IMG2 from './SupportWall.png';
import IMG3 from './portfolio1.jpg';
import IMG_citizen from './citizenize_mock_collec.png';

const data = [
  {
      id: 1,
      name: "SupportWall",
      desc: "Anonymous support system for students with a sticky-notes organized limitless wall to express themselves anonymously",
      demo: "https://github.com/alartuka/SupportWall",
      img: IMG2,
      tag: "Technical"
  },

  {
      id: 2,
      name: "ProPy",
      desc: "Image editor developed with linear algebra fundementals",
      demo: "https://github.com/alartuka/ProPy",
      img: IMG1,      
      tag: "Technical"
  },

  {
      id: 3,
      name: "Forage",
      desc: "Efficiency optimization system for foodbank operations that makes use of Machine Learning",
      demo: "https://github.com/alartuka/Forage",
      img: IMG3,
      tag: "Technical"
    },

    {
      id: 4,
      name: "Citizen-ize",
      desc: "A guide for immigration and citizenship to eases the process for newcomers and permenant residents. Providing tools for soical connections, and legal services",
      demo: "https://devpost.com/software/citizen-ize",
      img: IMG_citizen,
      tag: "Design"
    }

    // {
    //   id: 5,
    //   name: "Photo #3",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    //   img: IMG4,
    //   tag: "Photography"
    // }
]

export default data;