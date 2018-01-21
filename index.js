function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n){
  let lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild(){
  let children = document.getElementById('grand-node').querySelectorAll('div');

  for (let i = 0; i < children.length; i++){
    if (i === (children.length-1)){
      return children[i];
    }
  }
}
