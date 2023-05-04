import React, { useState } from 'react';
import OwnerEdited from "../Components/OwnerEdited"


const OwnerCard = ({ boat, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSave = (editedBoat) => {
      // Update the boat data here
      console.log('Updated boat data:', editedBoat);
      onUpdate(editedBoat);
      setIsEditing(false);
    };
  
    const handleCancel = () => {
      setIsEditing(false);
    };

    const handleDelete = () => {
      onDelete(boat.id);
    };
  
    return isEditing ? (
      <OwnerEdited boat={boat} onSave={handleSave} onCancel={handleCancel} />
    ) : (
      <div className="manage-card">
        <div className="manage-text">
            <p><b>{boat.name}</b></p>
            <p><b>Price:</b> {boat.price}</p>
            <br />
            <p><b>Location: </b>{boat.location}</p>
            <br />
            <p>{boat.description}</p>
        </div>
        <div className="card-buttons">
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    );
};

export default OwnerCard;
