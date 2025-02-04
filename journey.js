document.addEventListener("DOMContentLoaded", () => {
  const careerItems = [
    {
      title: "Bachelor of Science",
      company: "Columbia University",
      year: "May 2013",
      img: "images/columbia_logo.png",
    },
    {
      title: "Master of Science",
      company: "University of Texas, Austin",
      year: "Dec 2014",
      img: "images/UTexas.png",
    },
    {
      title: "Senior Project Engineer",
      company: "Thornton Tomasetti",
      year: "Feb 2015",
      img: "images/TT_logo.png",
    },
    {
      title: "Optimization Engineer",
      company: "FullStack Modular",
      year: "Aug 2019",
      img: "images/fsm_logo.svg",
    },
    {
      title: "Lead Digital Engineer",
      company: "Cytiva",
      year: "June 2021",
      img: "images/cytiva_logo.svg",
    },
    {
      title: "Staff Data Engineer",
      company: "Beckman Coulter",
      year: "May 2023",
      img: "images/becdx_logo.svg",
    },
    // Add more careers as needed
  ];

  // build out career points
  const careerFlex = document.querySelector(".career-flex");
  careerItems.forEach((item) => {
    const careerItem = `
            <div class="career-item">
            <div id="meta">
            <h3>${item.title}</h3>
            <p>${item.company}</p>
            <p>${item.year}</p>
            </div>
            <div id="img">
            <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="10" fill="rgb(78, 77, 77)" stroke="rgb(78, 77, 77)" stroke-width="2px"/>
            </svg>
            </div>
            <div id="logo">
            <img src="${item.img}" alt="logo" />
            </div>
            </div>
        `;
    careerFlex.insertAdjacentHTML("beforeend", careerItem);
  });

  //   get curr year and set to footer
  const yearSpan = document.querySelector("#footer-year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
