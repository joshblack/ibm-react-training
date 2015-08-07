import React from 'react/addons';
import expect from 'expect';

const { TestUtils } = React.addons;
const shallowRenderer = TestUtils.createRenderer();

export default function tests(Component) {
  return function () {
    shallowRenderer.render(<Component/>);

    const Menu = shallowRenderer.getRenderOutput();
    expect(Menu).toExist('Looks like you aren\'t rendering anything from your `Menu` component, maybe try starting with a `div`?');

    expect(Menu.props.children).toBeAn(Array, 'Your Menu component doesn\'t have more than one child, have you tried adding a Title for your data and a list for the Menu items?');

    const Title = Menu.props.children[0].props.children;
    const List = Menu.props.children[1].props.children;

    expect(Title).toBe('Menu', 'Looks like you don\'t have the right title for your Menu, did you try using `{DATA.title}` inside of your title?');
    expect(List).toBeAn(Array, 'Whoops! Looks like you don\'t have any items in your list.');

    const items = ['burrito', 'tacos', 'tostada', 'hush puppies'];

    items.forEach((item, i) => {
      if (List[i]) {
        const children = List[i].props.children;

        expect(children).toNotBe('hush puppies', 'Whoops! Hush Puppies aren\'t Mexican Food. Try filtering your items array.');
        expect(children).toBe(item, 'Uh oh, looks like the items aren\'t sorted. Have you looked into the `sortBy` method? You also might not have the content correct, expected: ' + item + ' and got ' + children);
      }
    });
  }
}
