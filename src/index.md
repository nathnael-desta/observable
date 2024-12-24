---
toc: false
---

<div class="hero">
  <h1>Hello framework</h1>
  <h2>Welcome to your new app! Edit&nbsp;<code style="font-size: 90%;">src/index.md</code> to change this page.</h2>
  <a href="https://observablehq.com/framework/getting-started">Get started<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
</div>

```js
async function loadData() {
  const popResponse = await FileAttachment("./data/pop.csv").csv({ typed: false });
  return popResponse;
}

// Call this in a separate cell to display the table



// async function loadCSV() {
//   try {
//     const popResponse = FileAttachment("./data/pop.csv");
//     const popCsvData = await popResponse.text();
//     const popData = parseCSV(popCsvData);

//     const lexResponse = FileAttachment("./data/lex.csv");
//     const lexCsvData = await lexResponse.text();
//     const lexData = parseCSV(lexCsvData);

//     const pciResponse = FileAttachment("./data/gdp_pcap.csv");
//     const pciCsvData = await pciResponse.text();
//     const pciData = parseCSV(pciCsvData);

//     return [popData, lexData, pciData];
//   } catch (error) {
//     console.error("error loading CSV:", error);
//   }
// }

// function parseCSV(data) {
//   const rows = data.trim().split("\n");

//   return rows.map((row) => row.split(/,(?=\d)/));
// }

// async function myTable() {
//   const [popData, lexData, pciData] = await loadCSV();

// }

// myTable()
```


<div class="grid grid-cols-2" style="grid-auto-rows: 504px;">
  <div class="card">${
    Inputs.table(await loadData())
    <!-- resize((width) => Plot.plot({
      title: "Your awesomeness over time 🚀",
      subtitle: "Up and to the right!",
      width,
      y: {grid: true, label: "Awesomeness"},
      marks: [
        Plot.ruleY([0]),
        Plot.lineY(aapl, {x: "Date", y: "Close", tip: true})
      ]
    })) -->
  }</div>
  <!-- <div class="card">${
    resize((width) => Plot.plot({
      title: "How big are penguins, anyway? 🐧",
      width,
      grid: true,
      x: {label: "Body mass (g)"},
      y: {label: "Flipper length (mm)"},
      color: {legend: true},
      marks: [
        Plot.linearRegressionY(penguins, {x: "body_mass_g", y: "flipper_length_mm", stroke: "species"}),
        Plot.dot(penguins, {x: "body_mass_g", y: "flipper_length_mm", stroke: "species", tip: true})
      ]
    }))
  }</div> -->
</div>

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>
