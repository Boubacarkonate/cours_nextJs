'use client';
const Button = () => {
    console.log('je suis un composant bouton du dossier ui.  Donc du côté client');
    
    const bonjour = () => {
        alert('Bonjour');
    }
  return (
    <button
    onClick={bonjour}
    >
      cliquer
    </button>
  )
}

export default Button
