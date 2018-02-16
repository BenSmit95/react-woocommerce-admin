import React from 'react';

const DropdownPane = (props) => {

  let content = (props.visible ? props.children : null)

  return (
    <div>
      <div>{props.label}</div>
        {content}
    </div>
  )
}

export default DropdownPane;