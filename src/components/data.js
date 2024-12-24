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

export const loadData = () => {
  const popResponse = FileAttachment("./data/pop.csv").csv({typed: true})

  console.log('please', popResponse)


}