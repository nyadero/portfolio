// return my projects as an array of objects

const projects = [
  {
    id: 1,
    name: "Task-buddy",
    type: "web",
    languages: ["reactjs", "html", "css", "localstorage"],
    description: "This is a fullstack CRUD application that allows user to create, read, update and delete tasks. It uses the device's localstorage to persist and store data. In this project I learnt about react hooks like useEffect, useState and also got to polish my javascript skills.",
    images: ["/taskbuddy1.png", "/taskbuddy2.png", "/taskbuddy3.png", "/taskbuddy4.png", "/taskbuddy5.png", "/taskbuddy6.png"],
    heroimage: "/taskbuddy1.png",
    demolink: "https://taskbuddy.netlify.app/",
  },
  {
    id: 2,
    name: "Countries of the world",
    type: "web",
    languages: ["reactjs", "axios", "REST COUNTRIES aPI"],
    description: "This is a simple react website that fetches contries from the countries rest api and displays them. It uses axios to fetch the data",
    images: ["/taskbuddy1.png", "/taskbuddy2.png", "/taskbuddy3.png", "/taskbuddy4.png", "/taskbuddy5.png", "/taskbuddy6.png"],
    heroimage: "/worldcountries.png",
    demolink: "https://worlcountries.netlify.app/",
  },
]

export default projects;

