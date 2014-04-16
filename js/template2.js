function Template(data, el, el2) {
      this.data = data;
      this.el = el;
      this.el2 = el2;
      this.generateMarkup = function()  {
            var markup = "";
            var i;

            for(i=0; i < this.data.length; i++) {
              markup += "<" + el + ">" + this.data[i].movie + "</" + el + ">" + "<" + el2 + ">" + data[i].score + "</" + el2 + ">";
            }

            return markup;
          };

}

var movieScores = [
  {
    movie: "The Patriot",
    score: 89
  },
  {
     movie: "Independence Day",
    score: 70
  },
  {
    movie: "Harry Potter and the Socercers Stone",
    score: 90
  },
  {
    movie: "Harry Potter and the Order of the Phoenix",
    score: 78
  }

];

var movieTemplate = new Template(movieScores, "h4", "p");
console.log(movieScores);


$(".movies").append(movieTemplate.generateMarkup() );

