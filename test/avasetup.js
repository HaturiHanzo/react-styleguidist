// AVA environment setup

import path from 'path';
import { shallow, render } from 'enzyme';
import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';
import mock from 'mock-require';

/**
 * Enzyme and unexpected-react.
 */
global.shallow = shallow;
global.render = render;
global.expect = unexpected.clone().use(unexpectedReact);

/**
 * Allow requiring rsg-components/Smth.
 */
process.env.NODE_PATH = path.resolve(__dirname, '../src');
require('module').Module._initPaths();

/**
 * Mock Editor component because CodeMirror doesn’t work in Node.
 */
mock('rsg-components/Editor', {});
mock('!!style-loader!css-loader!highlight.js/styles/tomorrow.css', {});
