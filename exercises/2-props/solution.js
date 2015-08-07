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
  static defaultProps = {
    size: 16
  }

  static propTypes = {
    user: React.PropTypes.shape({
      email: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired
    }),
    size: React.PropTypes.number
  }

  render() {
    const { user, size } = this.props;
    const hash = md5(user.email);
    const url = `${GRAVATAR_URL}/${hash}?s=${size * 2}`;

    return <img src={url} width={size} />;
  }
}

class App {
  render() {
    const users = this.props.users.map(
      (user) => <li key={user.id}><Gravatar user={user} size={36} />{user.name}</li>);

    return (
      <div>
        <h1>Users</h1>
        <ul>{users}</ul>
      </div>
    );
  }
}

React.render(
  <App users={USERS} />,
  document.querySelector('#example')
);
