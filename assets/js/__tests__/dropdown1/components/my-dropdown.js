/* eslint-disable no-magic-numbers */
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MyDropdown, MyDropdownControls } from '../../../src/dropdown1/components';
import { createToolbarButton } from '../../../src/dropdown1/utils';

const { BlockEdit, BlockFormatControls } = wp.blockEditor;
const { SlotFillProvider }               = wp.components;
const { createHigherOrderComponent }     = wp.compose;
const { Fragment }                       = wp.element;
const { addFilter, removeFilter }        = wp.hooks;
const { create }                         = wp.richText;

beforeAll(() => {
  addFilter('editor.BlockEdit', 'components-test/dropdown1-test', createHigherOrderComponent(BlockEdit => props =>
    <Fragment>
      <BlockEdit {...props}/>
      <MyDropdown/>
      <MyDropdownControls>
        {createToolbarButton({ args: { isActive: true }, name: 'test1', formatName: 'test1f' })}
      </MyDropdownControls>
      <MyDropdownControls>
        {createToolbarButton({ args: { isActive: false }, name: 'test2', formatName: 'test2f' })}
      </MyDropdownControls>
    </Fragment>,
  ));
});

afterAll(() => {
  removeFilter('editor.BlockEdit', 'components-test/dropdown1-test');
});

describe('MyDropdown', () => {
  it('should render MyDropdown', () => {
    const wrapper = mount(
      <SlotFillProvider>
        <BlockFormatControls.Slot/>
        <BlockEdit
          name="core/quote"
          isSelected={true}
          attributes={({
            className: 'test-block-edit',
            content: create({
              text: 'test',
              start: 0,
              end: 1,
              formats: [[], [], [], []],
            }),
          })}
        />
      </SlotFillProvider>,
    );

    expect(toJson(wrapper, { mode: 'deep' })).toMatchSnapshot('render');

    expect(wrapper.find('.components-button.components-dropdown-menu__toggle').hostNodes()).toHaveLength(1);
    expect(wrapper.find('.components-button.components-dropdown-menu__toggle.is-opened').hostNodes()).toHaveLength(0);
    wrapper.find('.components-button.components-dropdown-menu__toggle').hostNodes().simulate('click');

    expect(toJson(wrapper, { mode: 'deep' })).toMatchSnapshot('click');
    expect(wrapper.find('.components-button.components-dropdown-menu__toggle.is-opened').hostNodes()).toHaveLength(1);
    expect(wrapper.find('.components-button.components-dropdown-menu__menu-item .test1').hostNodes()).toHaveLength(1);
    expect(wrapper.find('.components-button.components-dropdown-menu__menu-item .test2').hostNodes()).toHaveLength(1);
  });
});
