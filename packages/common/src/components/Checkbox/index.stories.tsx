import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from './';
import { ThemeDecorator } from '../../stories/decorators';

const stories = storiesOf('components/Input', module).addDecorator(
  ThemeDecorator
);

stories
  .add('Basic Checkbox', () => (
    <>
      <Checkbox
        onClick={action('onClick')}
        onChange={action('onChange')}
        id="hello"
      />
      <label htmlFor="checkbox">Hello</label>
    </>
  ))
  .add('Checked Checkbox', () => (
    <>
      <Checkbox
        onClick={action('onClick')}
        onChange={action('onChange')}
        id="hello"
        checked
      />
      <label htmlFor="checkbox">Hello</label>
    </>
  ));
