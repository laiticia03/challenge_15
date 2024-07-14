import {useState} from 'react'
import './App.css';
import Character from './Components/Character';

const characters = [
  {
    id: 1,
    name: 'SpongeBob SquarePants',
    description: 'Optimistic and enthusiastic sea sponge',
    image: 'https://via.placeholder.com/100x100?text=SpongeBob'
  },
  {
    id: 2,
    name: 'Patrick Star',
    description: 'Lazy and gluttonous starfish',
    image: 'https://via.placeholder.com/100x100?text=Patrick'
  },
  {
    id: 3,
    name: 'Squidward Tentacles',
    description: 'Grumpy and sarcastic octopus',
    image: 'https://via.placeholder.com/100x100?text=Squidward'
  }
];

const App = () => {
  const [charactersState, setCharactersState] = useState(characters);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleDelete = (characterId) => {
    setCharactersState(charactersState.filter((character) => character.id !== characterId));
  };

  const handleEdit = (character) => {
    setSelectedCharacter(character);
  };

  const handleSaveChanges = (characterId, newName, newDescription, newImage) => {
    const updatedCharacters = charactersState.map((character) => {
      if (character.id === characterId) {
        return { ...character, name: newName, description: newDescription, image: newImage };
      }
      return character;
    });
    setCharactersState(updatedCharacters);
    setSelectedCharacter(null);
  };

  return (
    <div className="dashboard">
    {charactersState.map((character) => (
      <Character
        key={character.id}
        character={character}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSaveChanges={handleSaveChanges}
      />
    ))}
    </div>
  );
}

export default App;
