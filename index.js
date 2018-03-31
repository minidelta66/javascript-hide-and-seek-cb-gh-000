function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').remove('target');
}

function deepestChild(){
  return document.getElementById('grand-node').nodes[nodes.length- 1];
}
