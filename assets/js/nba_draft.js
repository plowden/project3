d3.text("data/nba_draft.csv").then(function(data) {
    var rows = d3.csvParseRows(data);
    //console.log(rows);
 
    var table = d3.select("#draftTable")
        .append("table");

    table.append('thead').append('tr')
        .selectAll('th')
        .data(rows[0]).enter()
        .append('th')
        .text(function(d){return d;});

    table.append("tbody")
        .selectAll("tr")
        .data(rows.slice(1)).enter()
        .append("tr")
        .selectAll("td")
        .data(function(d){return d;}).enter()
        .append("td")
        .text(function(d){return d;})
});

