function Template(data, el, el2) {
      this.data = data;
      this.el = el;
      this.el2 = el2;
      this.generateMarkup = function()  {
            var markup = "";
            var i;

            for(i=0; i < this.data.length; i++) {
              markup += "<" + el + ">" + this.data[i].area + "</" + el + ">" + "<" + el2 + ">" + data[i].allotment + "</" + el2 + ">";
            }

            return markup;
          };

}

var devonsExpenses = [
  {
    area: "gas",
    allotment: 35
  },
  {
     area: "loans",
    allotment: 40
  },
  {
    area: "food",
    allotment: 60
  },
  {
    area: "play",
    allotment: 20
  }

];

var expenseTemplate = new Template(devonsExpenses, "h3", "p");
console.log(expenseTemplate);


$(".expenses").append( expenseTemplate.generateMarkup() );
