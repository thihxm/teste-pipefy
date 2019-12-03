/* globals PipefyApp */
import React , {useEffect, useState} from 'react';
import { render } from 'react-dom';

const pipefy = PipefyApp.init();

export default function ReactTab (props) {
  
  const [pipe, setPipe] = useState(null);
  
  useEffect(() => {
      PipefyApp.render(() => {
      pipefy.pipe().then((pipe) => {
        setPipe(pipe);
      });
    });
  }, []);
  
  return (
    <>
      {!pipe ? (
        <div />
      ) : (
        <h1>Hello from React on Pipe: {pipe.name}</h1>
      )}
    </>
  )
}


render(<ReactTab />, document.getElementById('application'));