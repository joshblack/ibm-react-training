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
    const items = DATA.items
      .filter((item) => item.type === 'mexican')
      .sort(sortBy('name'))
      .map((item) => <li key={item.id}>{item.name}</li>);

    return (
      <div>
        <h1>{DATA.title}</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

React.render(
  <Menu/>,
  document.querySelector('#example'),
  tests(Menu)
);
