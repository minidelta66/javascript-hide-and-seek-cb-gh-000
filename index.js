function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').remove('target');
}

function deepestChild(){
  var nodes = document.querySelectorAll('#grand-node div');
  var mostDeep = nodes[nodes.length- 1];
  return mostDeep;
//  return document.getElementById('grand-node').nodes[nodes.length- 1];
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}
