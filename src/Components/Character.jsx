import React, { useState } from 'react';
import '../App.css'
const Character = ({ character, onDelete, onEdit, onSaveChanges }) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(character.name);
  const [newDescription, setNewDescription] = useState(character.description);
  const [newImage, setNewImage] = useState(character.image);

  const handlePortraitClick = () => {
    onEdit(character);
  };

  const handleDeleteClick = () => {
    onDelete(character.id);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveChangesClick = () => {
    onSaveChanges(character.id, newName, newDescription, newImage);
    setEditing(false);
  };

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} onClick={handlePortraitClick} />
      {editing ? (
        <div className="edit-form">
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
          <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
          <input type="text" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
          <button onClick={handleSaveChangesClick}>Save Changes</button>
        </div>
      ) : (
        <div className="character-info">
          <h2>{character.name}</h2>
          <p>{character.description}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Character;