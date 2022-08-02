import React from 'react';
import './style.css';

import FakeStoreAPI from './pages/FakeStoreAPI/FakeStoreAPI';
import JsonPlaceholderAPI from './pages/JsonPlaceholderAPI/JsonPlaceholderAPI';

export default function App() {
  return (
    <div>
      <FakeStoreAPI />
      <JsonPlaceholderAPI />
    </div>
  );
}
