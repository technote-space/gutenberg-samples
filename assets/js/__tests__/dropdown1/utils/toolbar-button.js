import { getToolbarButtonProps, createToolbarButton } from '../../../src/dropdown1/utils';

describe('getToolbarButtonProps', () => {
  it('should has properties', () => {
    const onChange = jest.fn();
    const format   = {};
    const props    = getToolbarButtonProps({
      args: {
        isActive: false,
        onChange: onChange,
        value: {
          start: 0,
          end: 1,
          text: 'test',
          formats: [
            [format],
            [format],
            [format],
            [format],
          ],
        },
      },
      name: 'test1',
      formatName: 'test2',
    });
    expect(props).toHaveProperty('icon');
    expect(props).toHaveProperty('title');
    expect(props).toHaveProperty('onClick');
    expect(props).toHaveProperty('isActive');
    expect(props.isActive).toBe(false);
    props.onClick();
    expect(onChange).toBeCalled();
  });
});

describe('createToolbarButton', () => {
  it('should create toolbar button', () => {
    const button = createToolbarButton({
      args: {},
      name: 'test3',
      formatName: 'test4',
    });

    expect(button).toHaveProperty('props');
    expect(button.props).toHaveProperty('icon');
    expect(button.props).toHaveProperty('title');
    expect(button.props).toHaveProperty('onClick');
    expect(button.props).toHaveProperty('isActive');
  });
});
