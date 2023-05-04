import React, { useState } from 'react';

const OwnerEdited = ({ boat, onSave, onCancel }) => {
  const [editedBoat, setEditedBoat] = useState(boat);

  const handleChange = (e) => {
    setEditedBoat({ ...editedBoat, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(editedBoat);
  };

  return (
    <div className="edited-card">
      <input
        type="text"
        name="name"
        value={editedBoat.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        value={editedBoat.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        value={editedBoat.location}
        onChange={handleChange}
      />
        <input
        type="text"
        name="description"
        value={editedBoat.description}
        onChange={handleChange}
      />
      <div className="edited-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};
export default OwnerEdited;
