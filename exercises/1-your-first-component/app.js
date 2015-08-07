/**
 * Exercise 1
 *
 * Render `DATA` to the page
 *   - put the title in an h1
 *   - only render mexican food (hint: arrays have a 'filter' method)
 *   - sort the items in alphabetical order by name (hint: try [].sort(sortBy('type')))
 */

import React from 'react';
import tests from './tests';

const DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};

function sortBy(key) {
  return (a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }

    if (a[key] < b[key]) {
      return -1;
    }

    return 0;
  }
}

class Menu {
  render() {
    return null;
  }
}

React.render(
  <Menu/>,
  document.querySelector('#example'),
  tests(Menu)
);
