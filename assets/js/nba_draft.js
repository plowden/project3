// Load data from nba_draft.csv
d3.csv("../../nba_draft.csv").then(function(draftData) {

  // console.log(draftData);

  // log a list of names
  var names = draftData.map(data => data.player);
  console.log("names", names);

  // Cast each hours value in tvData as a number using the unary + operator
  draftData.forEach(function(data) {
    console.log("Name:", data.name);
  });
}).catch(function(error) {
  console.log(error);
});

