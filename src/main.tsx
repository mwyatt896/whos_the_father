/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-screen w-screen'>
    <PuzzleWalletProvider
      dAppName="Who's the father?"
      dAppDescription='Inspired by Maury'
      dAppUrl='https://whos-the-father.vercel.app/'
      dAppIconURL='https://whos-the-father.vercel.app/alex_head.png'
      // will change this once deployed to vercel!
    >
      <App />
    </PuzzleWalletProvider>
  </div>
);
