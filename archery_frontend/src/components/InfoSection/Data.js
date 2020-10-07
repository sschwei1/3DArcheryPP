export const AboutObject = {
  id: 'about',
  lightTheme: true,
  topLine: 'Archery management tool',
  headline: 'New archery management tool!',
  description: 'Start to use our new archery event manager today! ' +
    'We do not save ANY personal information about our user! It\'s ' +
    'free to use and open source. This tool is developed by 3dium.',
  buttonLabel: 'How does it work?',
  buttonLink: 'howto',
  buttonPageLink: true,
  imgStart: false,
  img: require('../../images/archery_no_bg_test.png'),
  alt: 'archer'
};

export const HowObject = {
  id: 'howto',
  lightTheme: false,
  topLine: 'Quick guide',
  headline: 'How to use!',
  description: 'You probably wonder how our tool works, right? Well, ' +
    'here is a quick startup guide:' +
    '\n1.) Do this!' +
    '\n2.) Do that!' +
    '\n3.) And now this!' +
    '\n4.) Enjoy whatever you just archieved!',
  buttonLabel: 'Detailed Guide',
  buttonLink: '/howto',
  buttonPageLink: false,
  imgStart: true,
  img: require('../../images/setup_guide_test3.png'),
  alt: 'guide'
};

export const CompanyObject = {
  id: 'company',
  lightTheme: true,
  topLine: 'About us',
  headline: 'Who are we?',
  description: 'We are 3dium uwu',
  buttonLabel: 'Our team',
  buttonLink: 'devteam',
  buttonPageLink: true,
  imgStart: false,
  img: require('../../images/logos/logo_no_name.png'),
  alt: 'archery'
};