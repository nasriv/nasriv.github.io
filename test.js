document.addEventListener("DOMContentLoaded", () => {
  const hexGridRows = 6; // init number of rows
  const rowCountA = 5; // init number of hexagons in row A
  const rowCountB = rowCountA + 1; // init number of hexagons in row B
  var hexId = 0; // init hexagon id count value

  const svgWidth = 238; // init svg width (adjusted for flat side up)
  const svgHeight = 250; // init svg height

  const hexGridRowContainer = document.querySelector(".hex-grid");

  // Function to create the SVG element for a hexagon
  const svgElement = (id, imageUrl, description) => `
    <svg id="${id}" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 120 100">
              <defs>
            <clipPath id="hexClip" clipPathUnits="objectBoundingBox">
                <polygon points="0.5,0 1,0.25 1,0.75 0.5,1 0,0.75 0,0.25"/>
            </clipPath>
        </defs>  
    <path
            d="M38,2 
            L82,2 
            A12,12 0 0,1 94,10 
            L112,44 
            A12,12 0 0,1 112,56
            L94,90       
            A12,12 0 0,1 82,98
            L38,98
            A12,12 0 0,1 26,90
            L8,56
            A12,12 0 0,1 8,44
            L26,10
            A12,12 0 0,1 38,2"
        />
        <image href="${imageUrl}" clip-path="url(#hexClip)"/>
        <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="20" dy=".3em">${id}</text>
        <div class="description">${description}</div>
    </svg>
  `;

  // Function to insert hex grid rows with alternating element counts
  function insertHexGridRows(numRows) {
    for (let i = 0; i < numRows; i++) {
      const hexGridRowElement = `<div class="hex-grid-row" id="row-${i}"></div>`;
      hexGridRowContainer.insertAdjacentHTML("beforeend", hexGridRowElement);

      const elementCount = i % 2 === 0 ? rowCountA : rowCountB; // Alternate element count

      for (let j = 0; j < elementCount; j++) {
        const hexRowContainer = document.querySelector(
          `.hex-grid-row#row-${i}`
        );
        const imageUrl = `images/project-images/splash_screen1.png`; // Replace with actual image URL
        const description = `Description for hexagon ${hexId}`; // Replace with actual description
        hexRowContainer.insertAdjacentHTML(
          "beforeend",
          svgElement(`id${hexId}`, imageUrl, description)
        );
        hexId++;
      }

      // Translate all rows up by 250 * their row index except the first one
      const hexRow = document.querySelector(`.hex-grid-row#row-${i}`);
      if (i > 0) {
        hexRow.style.transform += ` translateY(-${150 * i}px)`;
      }
    }
  }

  insertHexGridRows(hexGridRows);
});
