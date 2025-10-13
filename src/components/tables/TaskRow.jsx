import React from "react";

export default React.memo(function propRow({ prop }) {
  return (
    <tr>
      <td>{prop.title}</td>
      <td>{prop.status}</td>
      <td>{prop.description}</td>
    </tr>
  );
});
