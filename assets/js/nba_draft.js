function showTable() {

    d3.text("data/nba_draft.csv", function (data) {
    console.log("function running");
    var rows = d3.csv.parseRows(data);
    var tbl = d3.select("#draftTable")
        .append("table")

        .selectAll("tr")
        .data(rows).enter()
        .append("tr")

        .selectAll("td")
        .data(function(d) { return d; }).enter()
        .append("td")
        .text(function(d) { return d; });

});
}
