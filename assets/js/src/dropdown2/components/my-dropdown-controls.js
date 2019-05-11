const { createSlotFill } = wp.components;

/**
 * @param {string} group group
 * @returns {*} slot fill
 * @constructor
 */
const MyDropdownControls = group => {
	const { Fill, Slot } = createSlotFill( 'MyDropdownControls.' + group );
	Fill.Slot = Slot;
	return Fill;
};

export default MyDropdownControls;
