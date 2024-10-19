import { useRef } from 'react'
import { useCallback, useEffect, useState } from 'react'


function App() {
  const [length, setLength] = useState(-1)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")

  const passwordReff = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numberAllowed) str+= "123456789"
      if (charAllowed) str+= "!@#$%^&*()_+"

      for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random()*str.length +1)
        pass += str.charAt(char) 
      }
      setPassword(pass)
      
  }, [length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = () =>{
    window.navigator.clipboard.writeText(password)
    passwordReff.current?.select()
  }

    useEffect(() =>{
      passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator])



  return (
   
    <div className="w-full max-w-xl mx-auto rounded-2xl px-4 py-3 my-8 bg-gray-200 text-gray-800 flex flex-col justify-center items-center shadow-2xl shadow-white /80 border-2 ">
      <h1 className='text-gray-800 text-center my-3 text-4xl font-bold'>Password generator</h1>
    <div className="flex shadow rounded-xl overflow-hidden mb-4 text-3xl border ">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordReff}
           
        />
        <button onClick={copyPasswordToClipboard}
        className='font-semibold flex justify-center items-center outline-none text-white px-3 py-0.5 shrink-0 ml-1 rounded-xl bg-blue-700 shadow-lg shadow-blue-700/50 ... '
        >Copy
        </button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1 text-xl text-gray-800 font-bold'>
        <input 
        type="range"
        min={-1}
        max={99}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1 text-xl font-bold">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1 text-xl font-bold">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Character</label>
      </div>
    </div>
</div>
    
  )
}

export default App
