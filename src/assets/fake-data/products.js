// all images imported from images directory
import product_01_image_01 from '../images/tunein.png';
import product_01_image_07 from '../images/spotify.png';


import product_02_image_01 from '../images/hindustan.png';
import product_02_image_02 from '../images/hindu.jpg';


import product_03_image_01 from '../images/toi.png';
import product_03_image_02 from '../images/dainikjag.png';


import product_04_image_01 from '../images/cnn.jpg';
import product_04_image_02 from '../images/dainikpat.jpg';


import product_05_image_01 from '../images/audible.png';
import product_05_image_02 from '../images/youtube.png';
import product_06_image_01 from '../images/wakeup.jpg';
import product_06_image_02 from '../images/loksabha.jpg';
import product_06_image_03 from '../images/rajyasabha.jpg';

const products = [

  {
    id: '01',
    title: 'TuneIn',
    price: 24.0,
    image01: product_01_image_01,
    category: 'Audio News',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ',
  },

  {
    id: '02',
    title: 'Hindustan Times',
    price: 115.0,
    image01: product_02_image_01,
    category: 'Newspapers',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '03',
    title: 'The Times of India',
    price: 110.0,
    image01: product_03_image_01,
    category: 'Newspapers',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '04',
    title: 'CNN',
    price: 110.0,
    image01: product_04_image_01,
    category: 'Newspapers',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '05',
    title: 'Audible',
    price: 24.0,
    image01: product_05_image_01,
    category: 'Audio News',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: '06',
    title: 'Spotify',
    price: 24.0,
    image01: product_01_image_07,
    category: 'Audio News',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '07',
    title: 'The Hindu',
    price: 115.0,
    image01: product_02_image_02,
    category: 'Newspapers',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '08',
    title: 'Dainik Jagran',
    price: 110.0,
    image01: product_03_image_02,
    category: 'Newspapers',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '09',
    title: 'Dainik Patrika',
    price: 110.0,
    image01: product_04_image_02,
    category: 'Newspapers',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '10',
    title: 'Youtube Premium',
    price: 24.0,
    image01: product_05_image_02,
    category: 'Audio News',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '11',
    title: 'Wake Up India',
    price: 35.0,
    image01: product_06_image_01,
    category: 'e-news',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '12',
    title: 'Lok Sabha',
    price: 35.0,
    image01: product_06_image_02,
    category: 'e-news',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '13',
    title: 'Rajyasabha',
    price: 35.0,
    image01: product_06_image_03,
    category: 'e-news',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
];

export default products;
