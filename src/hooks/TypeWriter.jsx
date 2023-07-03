
import { useTypewriter , Cursor } from 'react-simple-typewriter'

export const Typewriter = () => {
  const [text] = useTypewriter({
    words: ['Front-End Developer', 'MERN Stack Developer', 'Programmer'],
    loop: 0
  })

  return (
    <div className='text-accent text-3xl'>
      <span style={{}}>{text}</span><span><Cursor></Cursor></span>
    </div>
  )
}