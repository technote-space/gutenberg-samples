/* eslint-disable no-magic-numbers */
import { getRichTextSetting } from '../../../src/dropdown1/utils';

describe('getRichTextSetting', () => {

  const checkProperty = setting => {
    expect(setting).toHaveLength(2);
    expect(typeof setting[ 0 ]).toBe('string');
    expect(setting[ 1 ]).toHaveProperty('title');
    expect(setting[ 1 ]).toHaveProperty('tagName');
    expect(setting[ 1 ]).toHaveProperty('className');
    expect(setting[ 1 ]).toHaveProperty('edit');
    expect(typeof setting[ 1 ].title).toBe('string');
    expect(typeof setting[ 1 ].tagName).toBe('string');
    expect(typeof setting[ 1 ].className).toBe('string');
    expect(typeof setting[ 1 ].edit).toBe('function');
    expect(setting[ 1 ].edit()).not.toBeEmpty();
  };

  it('should get setting', () => {
    let calledCreate = false;
    const setting    = getRichTextSetting({
      name: 'test1',
      create: () => {
        calledCreate = true;
      },
    }, 1);

    checkProperty(setting);
    expect(calledCreate).toBe(true);
  });

  it('should get setting', () => {
    let calledCreate = false;
    const setting    = getRichTextSetting({
      name: 'test2',
      create: () => {
        calledCreate = true;
      },
      setting: {
        title: 'test3',
      },
    }, 0);

    checkProperty(setting);
    expect(calledCreate).toBe(true);
  });
});
