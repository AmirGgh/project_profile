
export const data = [
  {
    id: 1,
    name: "Fullstack - Movies Application",

    video: "https://www.youtube.com/embed/6hPdahVZ2MM",
    summary:
      "A web application that manages movies and users. The system was based on two Rest API servers and a client side in React.js. The architecture was divided according to Business and Data layers, when the servers were developed using Express and Node, database management realized by MongoDB and object modeling done with Mongoose. All server calls were made using CRUD-based Rest calls, with routers implemented and secured using JWT with Express. The client side is developed using React.js and Redux, with the design implemented using Material. The distribution of permissions in the application allowed only existing users to perform actions according to the limitations defined for them. The administrator had all possible permissions, while other users had partial permissions as defined. Possible permissions included edit members and edit subscribers. Only the administrator had permission to edit users in the users tab and could edit their permissions. On the subscriptions page, you can edit the movies each member has watched.",
    github: "https://github.com/AmirGgh/cinima4Git",
    live: "",
  },
  {
    id: 2,
    name: "FullStack with graphQL (Apollo) - Shift Manager ",
    video: "https://www.youtube.com/embed/YNR8oyyGicM",
    summary:
      "A web application was developed using GraphQL Apollo Server, with all server calls made using GraphQL. The application includes a shift management site that allows tracking of employees, departments, and shifts. The server manages databases realized by MongoDB, with the modeling of the objects carried out using Mongoose. Additionally, the server works with a JSON file of permissions for users, utilizing two layers of Business and Data to ensure secure access. JWT was used for application security. The client side was developed using React.js and Apollo client, linked to the GraphQL server. The application allows existing users to perform actions according to the limitations defined for them, with permissions distribution included.",
    github: "https://github.com/AmirGgh/shiftManager_Fullstack",
    live: "",
  },
  {
    id: 3,
    name: "React Application - Store Manager",
    video: "https://www.youtube.com/embed/t9gmx_Ke_GY",
    summary:
      "The project involved developing a web application with a client side developed using React.js with MaterialUI, and all data and requests managed by Firebase using CRUD operations. The application includes an online store that is accessible to both non-customers and registered customers. Registered customers can make purchases while the admin has access to all information about purchases and users, and can create and edit products, as well as edit users and add products to users. For the admin, the site appears as a management site with a dashboard displaying all the relevant data.",
    live: "https://amirggh.github.io/storeManager",
    github: "https://github.com/AmirGgh/storeManager",
  },
];
