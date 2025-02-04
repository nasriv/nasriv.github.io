document.addEventListener("DOMContentLoaded", () => {
  const projectList = [
    {
      title: "JL Zombies",
      description: "2D Platformer game built using PyGame package",
      image: "images/project-images/splash_screen1.png",
      url: "https://github.com/nasriv/JLZombies",
    },
    {
      title: "NYC Gas Consumption Analysis",
      description: "Data visualization of NYC gas consumption patterns",
      image: "images/project-images/Gas_Consump_ZIP.png",
      url: "https://github.com/nasriv/NYC_GasUsage",
    },
    {
      title: "Tunk",
      description:
        "Server-Client archiecture card game to play the game of Tunk",
      image: "",
      url: "",
    },
    {
      title: "Customer Churn Analysis",
      description:
        "Performed a customer churn analysis to identify customer behavior and build a classification model to increase retention rate",
      image: "../images/project-images/Contract_type_distr.png",
      url: "https://drive.google.com/file/d/1US58_M-L0W-djafoqWAloxKNeoaB9lJ9/view?usp=sharing",
    },
    {
      title: "NFL Database and Analytics",
      description:
        "Established an NFL database consisting of player statistics in order to run data analytics and shed light on some of my personal NFL questions",
      image: "../images/project-images/Database_flow.png",
      url: "https://github.com/nasriv/NFLFantasyAnalysis",
    },
    {
      title: "Monte Carlo Stock Price Forecaster",
      description:
        "Using probability distributions generated from historic stock volatility data to predict future stock prices",
      image: "../images/project-images/future_100.png",
      url: "https://medium.com/datadriveninvestor/how-to-predict-future-stock-prices-using-historic-volatility-b0e17b2abd02",
    },
    {
      title: "Covid-19 Dashboard",
      description:
        "Built a Covid visualization dashboard to track case growth metrics in each US State as well as across the entire US. Data is collected through API calls from The ",
      image: "../images/project-images/covidtracker.png",
      url: "https://github.com/nasriv/CovidTracker",
    },
    {
      title: "Olive Oil Mike",
      description:
        "A custom single player ode to the classic game 'Asteroids' where the objective of the game is to dodge the falling rocks and pick up vials of olive oil. All graphics were custom-made and built using the PyGame package ",
      image: "../images/project-images/OOMike.png",
      url: "https://github.com/nasriv/OliveOilMike",
    },
  ];

  // build out project items
  const projectFlex = document.querySelector(".projects-flex");
  projectList.forEach((item) => {
    const projectItem = `
    <div class="project-item">
    <img src="${item.image}" alt="project image" />
    <div class="title">${item.title}</div>
    <div class="description">${item.description}</div>
    <a href="${item.url}" class="project-link">View Project</a>
    </div>`;
    projectFlex.insertAdjacentHTML("beforeend", projectItem);
  });
});

    // <svg width="200" height="200" viewBox="0 0 200 200">
    //   <rect
    //     x="0"
    //     y="0"
    //     width="200"
    //     height="200"
    //     rx="30"
    //     ry="30"
    //     fill="rgb(78, 77, 77)"
    //     stroke="rgb(78, 77, 77)"
    //     stroke-width="2px"
    //   />
    // </svg>;