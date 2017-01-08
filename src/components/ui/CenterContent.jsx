import React from 'react';

export default function CenterContent({ ...props }) {
  return (
    <div style={{ textAlign: "center" }}>
      {props.children}
    </div>
  )
}
