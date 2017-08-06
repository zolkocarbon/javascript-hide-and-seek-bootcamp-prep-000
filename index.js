// return first element in document that matches passed selector
function getFirstSelector(selector) {
  //const firstElement = document.querySelector(selector)
  //return firstElement
  return document.querySelector(selector)
}

// returns contents of target class in id nested
function nestedTarget() {
//  const targetElement = document.querySelector('div#nested div.target')
//  return targetElement
    return document.querySelector('div#nested div.target')
}


//increment values in ranked-list by argument n
function increaseRankBy(n) {
  let lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    //** REVISED ** don't need the commented out code, can assign all of this directly
//    var temp = lis[i].innerHTML
//    var temp2 = parseInt(temp,10) + n;
//      var temp2 = parseInt(lis[i].innerHTML,10) + n;
    lis[i].innerHTML = parseInt(lis[i].innerHTML,10) + n; //this line use to be: temp2
  }
}

//return the deepest child in ID grand-node
function deepestChild() {
  let nodeList = document.getElementById('grand-node');
  while (nodeList.children.length != 0) { //if the nodes is 0 escape loop and return current nodes
    nodeList = nodeList.children[0];
  }
  return nodeList
}

/*
  //breadth-first
  function find(array, criteriaFn) {
    let current = array
    let next = []
    while (current) {
      if (criteriaFn(current)) {
        return current
      }
      if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          next.push(current[i])
        }
      }
      current = next.shift()
    }
    return null
  }

  //end of breadth-first
*/


//breadth-first search
/*
function find(array, criteriaFn) {
  // initialize two variables, `current`, and `next`
  // `current` keeps track of the element that we're
  // currently on, just like we did when unpacking the
  // array above; `next` is itself an array that keeps
  // track of the elements (which might be arrays!) that
  // we haven't looked at yet
  let current = array
  let next = []
  // hey, a `while` loop! this loop will only
  // trigger if `current` is truthy — so when
  // we exhaust `next` and, below, attempt to
  // `shift()` `undefined` (when `next` is empty)
  // onto `current`, we'll exit the loop
  while (current) {
    // if `current` satisfies the `criteriaFn`, then
    // return it — recall that `return` will exit the
    // entire function!
    if (criteriaFn(current)) {
      return current
    }
    // if `current` is an array, we want to push all of
    // its elements (which might be arrays) onto `next`
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    // after pushing any children (if there
    // are any) of `current` onto `next`, we want to take
    // the first element of `next` and make it the
    // new `current` for the next pass of the `while`
    // loop
    current = next.shift()
  }

  // if we haven't
  return null
}
*/
