import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App /> // nouvelle convention React avec version 18 pour afficher les composants du DOM virtuel
// On peut utiliser StrictMode si on souhaite vérifier notre code car il va tester en deux fois si'il n'y a pas d'erreurs
);

