/**
 * Exercise:
 *
 * Create a list of users that has a Gravatar image for each one.
 *
 * - Don't access `USERS` directly in the app, use a prop
 * - Validate Gravatar's `size` property, allow it to be a
 *   a number, or a string that can be converted to a number,
 *   ie: `size="asdf"` should warn (hint: parseInt)
 * - how many times does `getDefaultProps` get called?
 * - experiment with some of the other propTypes, send improper values
 *   and look at the messages you get
 *
 * Prop Validation:
 * http://facebook.github.io/react/docs/reusable-components.html#prop-validation
 *
 * Tips:
 * Gravatar's can be made from an <img> tag, for example:
 *   <img src="http://gravatar.com/avatar/md5(email)?s=100" width={100} />
 */

import React from 'react';
import md5 from 'md5';

const GRAVATAR_URL = 'http://gravatar.com/avatar';
const USERS = [
  { id: 1, name: 'Ryan Florence', email: 'rpflorence@gmail.com' },
  { id: 2, name: 'Michael Jackson', email: 'mjijackson@gmail.com' }
];

class Gravatar {
  render() {
    return null;
  }
}

class App {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <ul></ul>
      </div>
    );
  }
}

React.render(
  <App/>,
  document.querySelector('#example')
);
