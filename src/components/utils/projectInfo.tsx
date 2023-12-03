import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { FaCouch } from "react-icons/fa";
import { MdMovie, MdSportsGymnastics } from "react-icons/md";

export type URL = {
  name: string;
  href: string;
};

type ProjectInfo = {
  key: string;
  name: string;
  icon: JSX.Element;
  img: string;
  stack: string[];
  source: URL;
  figma: URL;
  demo: URL;
  youtubeID: string;
  video: string;
  title: string;
  paragraphs: {
    [key: string]: string;
  };
};

// Create a new Map instance
const projectInfo = new Map<string, ProjectInfo>();
const size = 30;

// Add entries to the Map
projectInfo.set("bookmark", {
  key: "bookmark",
  name: "Bookmark-it",
  icon: (
    <BsFillJournalBookmarkFill className="my-3" size={size} />
  ) as JSX.Element,
  img: "/bookmark.webp",
  video: "/bookmark-recording.mov",
  stack: ["TypeScript", "React JS", "Redux Toolkit", "Firebase"],
  source: {
    name: "m-oniqu3/bookmark-it",
    href: "https://github.com/m-oniqu3/bookmark-it",
  },
  youtubeID: "smUyMFGcsPg",
  figma: {
    name: "monique/bookmark-it",
    href: "https://www.figma.com/file/0eYLSHNLF34xLK4aJSli4M/Bookmarked?type=design&node-id=0%3A1&mode=design&t=d4ZuoMXJO1xTGwsv-1",
  },
  demo: { name: "bookmark-it", href: "https://bookmark-it.vercel.app/" },
  title: "An online bookshelf",
  paragraphs: {
    "1": "Bookmark-it is one of my favorite projects that I've had the pleasure of working on. It was designed for book enthusiasts like myself. As an avid reader, I found existing book storage apps lacking in design and functionality, so I decided to create my own solution.",

    "2": "Bookmark is a bookmarking app for readers. It provides an intuitive platform to build a personalized library with customizable shelves. The search functionality makes it easy for users to discover and add authors and books, enhancing the overall convenience for book enthusiasts.",

    "3": "This app was born out of my desire to have a space where I could seamlessly organize and store my growing collection of books. I wanted a user-friendly interface that resonated with fellow book lovers where we can conveniently manage our reading lists.",
  },
});

projectInfo.set("natura", {
  key: "natura",
  name: "Natura",
  icon: <MdSportsGymnastics className="my-3" size={size} />,
  img: "/natura.webp",
  video: "/natura-recording.mov",
  stack: ["React JS", "CSS Modules"],
  source: {
    name: "m-oniqu3/gym-natura",
    href: "https://github.com/m-oniqu3/gym-natura",
  },
  youtubeID: "dbOIXADh1uE",
  figma: {
    name: "monique/gym-natura",
    href: "https://www.figma.com/file/w8EGlRw6pVzu6h1xSs16wh/natura?type=design&node-id=0%3A1&mode=design&t=wDxd2fOecVUCCnRm-1",
  },
  demo: { name: "gym-natura", href: "https://gym-natura.vercel.app/" },
  title: "A women-only gym",
  paragraphs: {
    "1": "Natura is a React-powered, mobile-first, responsive website designed for a fictional women-only gym. Styled with CSS Modules, the project aims to create a safe and welcoming space for women to pursue their fitness goals. Founded with the intention of addressing the discomfort many women feel in traditional gyms, Natura is dedicated to providing a supportive environment for women's health and fitness journeys.",
  },
});

projectInfo.set("movie-memory", {
  key: "movie-memory",
  name: "Movie Memory",
  icon: <MdMovie className="my-3" size={size} />,
  img: "/moviememory.webp",
  video: "/movie-memory-recording.mov",
  stack: ["TypeScript", "SCSS", "Firebase", "TMD API"],
  source: {
    name: "m-oniqu3/movie-memory",
    href: "https://github.com/m-oniqu3/movie-memory",
  },
  youtubeID: "lTX5XHnTmL4",
  figma: {
    name: "monique/movie-memory",
    href: "https://www.figma.com/file/XVgFo6tAEbgZOqZkaOthPR/movie-memory?type=design&node-id=0%3A1&mode=design&t=gl7VC7YPXAsIOLWs-1",
  },
  demo: {
    name: "movie-memory",
    href: "https://your-movie-memory.vercel.app/",
  },
  title: "A movie tracker",
  paragraphs: {
    "1": "Movie Memory is a movie tracker app that allows users to search for movies, add them to their watchlist, and mark them as watched. The app was built with TypeScript and SCSS and uses Firebase for authentication and storage. The Movie Database API was used to fetch movie data.",

    "2": "The app was designed with a mobile-first approach and is fully responsive. The goal of this project was to create a simple and intuitive app to track movies and share them with friends without using a framework.",
  },
});

projectInfo.set("finest-and-co", {
  key: "finest-and-co",
  name: "Finest & Co",
  icon: <FaCouch className="my-3" size={size} />,
  img: "/finestandco.webp",
  video: "/finest-recording.mov",
  youtubeID: "Dw-TBnok5s8",
  stack: ["React JS", "Redux Toolkit", "Firebase"],
  source: {
    name: "m-oniqu3/finest-and-co",
    href: "https://github.com/m-oniqu3/finest-and-co",
  },
  demo: {
    name: "finest-and-co",
    href: "https://finest-co-furniture.vercel.app/",
  },
  figma: {
    name: "monique/finest-and-co",
    href: "https://www.figma.com/file/2kMItgEasTn7cs5DXdvXwX/finest%26co?type=design&node-id=0%3A1&mode=design&t=zID114wL12xNyR0R-1",
  },
  title: "A furniture store",
  paragraphs: {
    "1": "Finest & Co. is an online luxury furniture store where users can explore various furniture styles. The app allows users to browse through the available furniture styles, and when authenticated, they can manage items in their cart and wishlist. The goal of this project was to create a simple and intuitive app to showcase furniture styles and allow users to add items to their cart.",

    "2": "This project uses Firebase as the backend, and communicates with the Firestore database to store and manage user data. If a user does not wish to provide their credentials, they have the option to sign in anonymously.",
  },
});

export default projectInfo;
