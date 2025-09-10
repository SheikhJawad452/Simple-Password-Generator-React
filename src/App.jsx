import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password ,setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numAllowed) str += '0123456789';
    if(charAllowed) str += '!@#$%^&*/-+';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      pass += str[char];
    }

    setPassword(pass);
  },[length,numAllowed,charAllowed,setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=> {
    passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <div className='w-full h-screen bg-black text-white pt-10 flex justify-center'>
      <div className="px-3 py-2 bg-zinc-800 h-[180px] w-[600px] rounded-md shadow-lg">
        <h1 className='text-center text-3xl font-semibold'>Password Generator</h1>
        <div className=" text-center mt-2 text-lg  ">
          <input 
          type="text" 
          placeholder='Password'
          ref={passwordRef}
          readOnly
          value={password}
          className='bg-white w-3/4 px-2 py-1 rounded-l-lg placeholder:text-zinc-600 outline-none text-orange-500 '
          />

          <button 
          onClick={copyPasswordToClipboard}
          className='bg-blue-500 text-white px-3 py-1 rounded-r-lg text-center cursor-pointer'>
            Copy
          </button>

        </div>
        <div className="flex gap-4 text-amber-400 accent-blue-600 mt-3 ml-9 font-medium">
          <input type="range" 
          min={8}
          max={50}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className=''
          />
          <label >Length({length})</label>

          <div className="flex gap-x-0.5">
          <input 
          type="checkbox" 
          defaultChecked={numAllowed}
          onChange={()=> setNumAllowed((prev) => !prev)}
          />
          <label >Numbers</label>
          </div>

          <div className="flex gap-x-0.5">
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          onChange={()=> setCharAllowed((prev) => !prev)}
          />
          <label >Character</label>
          </div>

          
        </div>
      </div>
           
    </div>
  )
}

export default App
