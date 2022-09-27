import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PageLayout } from './component/layout/PageLayout';
import { connect, Provider } from 'react-redux';
import { RootState, store } from './store';

const ConnectedPageLayout = connect((state:RootState)=>{
  return{
    
  }
})(PageLayout)

function App() {
  return (
    <Provider store={store}>
      <PageLayout
        name={''}
        visitDate={new Date()}
        messages={[]}
      />  
    </Provider>

  );
}

export default App;
