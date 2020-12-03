/* istanbul ignore next */
const { BlockFormatControls }        = wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;
const { ToolbarGroup, DropdownMenu } = wp.components;
import MyDropdownControls from './my-dropdown-controls';

const MyDropdown = () => <BlockFormatControls>
  <div className="editor-format-toolbar block-editor-format-toolbar">
    <ToolbarGroup>
      <MyDropdownControls.Slot>
        {fills => <DropdownMenu
          className='components-dropdown-button'
          icon='admin-customizer'
          popoverProps={({ position: 'bottom left' })}
          label='dropdown'
          controls={fills.map(([{ props }]) => props)}
        />}
      </MyDropdownControls.Slot>
    </ToolbarGroup>
  </div>
</BlockFormatControls>;

export default MyDropdown;
