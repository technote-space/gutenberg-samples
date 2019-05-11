const { BlockFormatControls } = wp.editor;
const { Toolbar, DropdownMenu } = wp.components;

/**
 * @param {*} Slot Slot
 * @returns {*} dropdown
 * @constructor
 */
const MyDropdown = Slot => <BlockFormatControls>
	<div className="editor-format-toolbar block-editor-format-toolbar">
		<Toolbar>
			<Slot>
				{ fills => fills.length && <DropdownMenu
					icon='admin-customizer'
					position="bottom left"
					label='dropdown'
					controls={ fills.map( ( [ { props } ] ) => props ) }
				/> }
			</Slot>
		</Toolbar>
	</div>
</BlockFormatControls>;

export default MyDropdown;
