const email = "mailto:w.hernandez.code@gmail.com";
const github = "https://github.com/WillHernandez";
const linkedIn = "https://www.linkedin.com/in/will-hernandez-16325a88/"
const resume = "https://drive.google.com/file/d/1zyPF6rIjiGt6AEiZEsfzzfWfS3k4ISBr/view?usp=drive_link"
const chromeProfile = 'https://chromium-review.googlesource.com/q/owner:w.hernandez.code%2540gmail.com';
const chromeImg = '/img/bitmoji.png';

const contribData = [
  {
    key: 1,
    title: 'Allow JSON responses to be pretty printed.',
    issue: 'https://bugs.chromium.org/p/chromium/issues/detail?id=998674',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2909881',
    img: '/img/2909881.jpg',
    desc: 'Created a JSON parser that allows .json format network responses to be Pretty Printed. Enabled Pretty Print button on .json file types. Wrote Mocha tests to confirm parser worked as expected.'
  },
  {
    key: 2,
    title: 'Created a check on our document for any custom css varibles.',
    issue: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1153053&q=component%3APlatform%3EDevTools%20status%3DAvailable%20type%3DBug&can=2',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2803333',
    img: '/img/2803333.jpg',
    desc: 'Created a check for shorthand css properties. Used a regex to extract any longhand css properties from our current shorthand property. Added each extracted longhand property to our activeProperties map which will add a check to the property and uncheck any following conflicting css properties.'
  },
  {
    key: 3,
    title: 'Pretty-print directly visited minified asset files.',
    issue: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1019785&hotlist_id=10185&sort=%20rank%20-ID',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2572038/',
    img: '/img/2572038.jpg',
    desc: 'Fixed the order in which a visited pages mimeType was set. Added a new mimeType to recognize and allow the formatting of minified asset files when directly visited on a webpage.'
  },
  {
    key: 4,
    title: 'URL.createObjectURL() creates valid links.',
    issue: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1100124',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2991382/',
    img: '/img/2991383.jpg',
    desc: 'URL.createObjectURL() creates a clickable link that does not include \'blob\' which is a required for correct webpage routing. If url is type \'blob\', include all sections when creating a clickable link.'
  },
  {
    key: 5,
    title: 'Opening a new tab on formatted files opens an invalid window.',
    issue: 'https://bugs.chromium.org/p/chromium/issues/detail?id=911623&q=component%3APlatform%3EDevTools%20status%3DAvailable%20type%3DBug&can=2&start=500',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2769978/',
    img: '/img/2769978.jpg',
    desc: 'Added a check for tabs that are formatted. If the tab we are attempting to open a new tab on is formatted, return and open the url of its unformatted equivalent.'
  },
];

const moreContribData = [
  {
    key: 1,
    link: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1353829&q=component%3APlatform%3EDevTools%20status%3DAvailable%20type%3DBug&can=2',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/3899152/',
    desc: "Fixed a bug where console.table(['']) would not recognize empty string elements.",
  },
  {
    key: 2,
    link: 'https://bugs.chromium.org/p/chromium/issues/detail?id=998674&q=component%3APlatform%3EDevTools%20json&can=2&start=100',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/3055035/',
    desc: "Corrected a previous patch I had submitted. JSON formatter now respects the user's indentation level provided in Chrome Settings > Preference > Sources section > Default indentation",
  },
  {
    key: 3,
    link: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1137733',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2493185',
    desc: 'Prevent “Emulated Devices” text from wrapping. Changed a style property on the “Emulated Devices” h1 to prevent it from wrapping to the next line and clashing with the "Add custom device” button when the DevTools window is resized.',
  },
  {
    key: 4,
    link: 'https://bugs.chromium.org/p/chromium/issues/detail?id=1070605',
    href: 'https://chromium-review.googlesource.com/c/devtools/devtools-frontend/+/2606131/',
    desc: 'Work In Progress.',
  },
]

const projectLinks = [
  {
    key: 1,
    live: "https://willsfilestorage.netlify.app/",
    website: "AWS File Storage",
    frontGit: "https://github.com/WillHernandez/file_storage_cra",
    backGit: "https://github.com/WillHernandez/file_storage_backend_original",
    tech: "MERN - MongoDb, Express, React, NodeJS / AWS S3, Cognito"
  },
  {
    key: 2,
    live: "https://django-news-blog.onrender.com/",
    website:"Django News-Blog live-site",
    frontGit: "https://github.com/WillHernandez/django-news/tree/main",
    tech: "Python Django, HTML, CSS"
  },
  {
    key: 3,
    live: "https://will-knife-shop.netlify.app/",
    website: "Pocket Knifes R US",
    frontGit: "https://github.com/WillHernandez/knife-shop",
    backGit: "https://github.com/WillHernandez/shop-rest-api",
    tech: "MERN - MongoDb, Mongoose, Express, React, NodeJs"
  },
  {
    key: 4,
		live: "https://github.com/WillHernandez/session_auth",
    website: "Django REST API with Authentication/Authorization tokens",
    // frontGit: "https://github.com/WillHernandez/WorkoutTracker-frontend",
    // backGit: "https://github.com/WillHernandez/session_auth",
    tech: "Python - Django REST"
  },
  // {
  //   key: 4,
  //   live: "https://frolicking-ganache-42824a.netlify.app/",
  //   website: "Workout Tracker live-site",
  //   frontGit: "https://github.com/WillHernandez/WorkoutTracker-frontend",
  //   backGit: "https://github.com/WillHernandez/WorkoutTracker-backend",
  //   tech: "MERN - MongoDb, Express, React, NodeJS"
  // },
  // {
  //   key: 4,
  //   live: "https://determined-mcnulty-72601a.netlify.app/",
  //   website:"Exchange Rate live-site",
  //   frontGit: "https://github.com/WillHernandez/exchangeRateCalculator",
  //   backGit: "https://github.com/WillHernandez/currencyapi",
  //   tech: "HTML/CSS/JS - Python Django REST Framework"
  // },
  // {
  //   key: 5,
  //   live: "https://github.com/WillHernandez/Ninjas_API",
  //   website: "Ninjas Api",
  //   tech: "MERN - MongoDb, Express, NodeJS"
  // },
]

const skills =
  [
    'Javascript',
    'Typescript',
		'MERN',
    'MongoDB',
    'Express',
    'React',
    'NodeJS',
		'Next.JS',
    'SQL/MYSQL/noSQL',
    'Python',
    'Django/REST-Framework',
    'Docker/Kubernetes',
    'CSS/SASS/SCSS',
    'Jest/Mocha/Chai/Karma Testing',
    'Git/Mercurial',
  ]

const badges = [
  {
    key: 1,
    img: '/img/aws_cda.png',
    title: "AWS Certified Developer - Associate",
    href: 'https://www.credly.com/badges/63a4f507-9455-4131-8a2d-5cd3d4e2aac7/public_url'
  }
]

export {
	resume,
  email,
  github,
  linkedIn,
  chromeProfile,
  chromeImg,
  contribData,
  moreContribData,
  projectLinks,
  skills,
  badges
}
