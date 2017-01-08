import React from 'react';

export default function FloatRight({ ...props }) {
  return (
    <div style={{ float: "right" }}>
      {props.children}
    </div>
  )
}
