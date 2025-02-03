const events = [
  {
    logo: "images/columbia_logo.png",
    date: "May 2013",
    title: "Columbia University",
    description: "Bachelor of Science",
    url: "https://www.columbia.edu/",
    type: "education"
  },
  {
    logo: "images/UTexas.png",
    date: "Dec 2014",
    title: "University of Texas at Austin",
    description: "Master of Science",
    url: "https://www.utexas.edu/",
    type: "education"
  },
  {
    logo: "images/TT_logo.jpeg",
    date: "Feb 2015",
    title: "Thornton Tomasetti",
    description: "Senior Project Engineer",
    url: "https://www.thorntontomasetti.com/",
    type: "professional"
  },
  {
    logo: "images/fsm_logo.svg",
    date: "Oct 2019",
    title: "Full Stack Modular",
    description: "Modular Optimization Engineer",
    url: "https://www.fullstackmodular.com/",
    type: "professional"
  },
  {
    logo: "images/cytiva_logo.svg",
    date: "June 2021",
    title: "Cytiva",
    description: "Lead Digital Solutions Engineer",
    url: "https://www.cytivalifesciences.com/en/us",
    type: "professional"
  },
  {
    logo: "images/becdx_logo.svg",
    date: "May 2023",
    title: "Beckman Coulter Diagnostics",
    description: "Staff Data Engineer",
    url: "https://www.beckmancoulter.com/",
    type: "professional"
  },
];

function createTimelineEvent(event) {
  const eventContainer = document.createElement("div");
  eventContainer.classList.add("timeline-event");

  const dot = document.createElement("div");
  dot.classList.add("timeline-dot");
  dot.classList.add(event.type);

  const logoLink = document.createElement("a");
  logoLink.href = event.url;
  logoLink.target = "_blank";

  const logo = document.createElement("img");
  logo.src = event.logo;
  logo.classList.add("timeline-logo");

  logoLink.appendChild(logo);
  dot.appendChild(logoLink);

  const content = document.createElement("div");
  content.classList.add("timeline-content");

  const title = document.createElement("h3");
  title.textContent = event.title;

  const date = document.createElement("p");
  date.textContent = event.date;
  date.classList.add("timeline-date");

  const description = document.createElement("p");
  description.textContent = event.description;

  content.appendChild(title);
  content.appendChild(date);
  content.appendChild(description);

  eventContainer.appendChild(dot);
  eventContainer.appendChild(content);

  eventContainer.addEventListener("mouseover", () => {
    content.style.display = "block";
  });

  eventContainer.addEventListener("mouseout", () => {
    content.style.display = "none";
  });

  return eventContainer;
}

function renderTimeline(events) {
  const timelineContainer = document.getElementById("timelineContainer");

  events.forEach((event) => {
    const timelineEvent = createTimelineEvent(event);
    timelineContainer.appendChild(timelineEvent);
  });

  const timelineLine = document.createElement("div");
  timelineLine.classList.add("timeline-line");
  timelineContainer.appendChild(timelineLine);
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline(events);
});
