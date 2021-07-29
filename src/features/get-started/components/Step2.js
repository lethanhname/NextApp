import React from 'react';
function Step2({ updateFormData }) {
  function handleParam (event) {
    
    const name = event.target.name;
    const value = event.target.value;
    updateFormData({name,value});
  };
  return (
    <div>
      <p>
        name: <input name="name" onChange={handleParam} />
      </p>      
    </div>
  );
}

export default Step2;