import React from 'react';
import Header from './components/Header';
import UserInputForm from './components/UserInputForm';
import RecommendationList from './components/RecommendationList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <UserInputForm />
      <RecommendationList />
      <Footer />
    </div>
  );
}

export default App;