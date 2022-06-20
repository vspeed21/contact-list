import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoContactos from './components/ListadoContactos'

function App() {
  const [contactos, setContactos] = useState(JSON.parse(localStorage.getItem('contactos')) ?? []);
  const [contactoEditar, setContactoEditar] = useState({})

  useEffect( () => {
    localStorage.setItem('contactos', JSON.stringify(contactos))
  }, [contactos]);
  
  function eliminarContacto(id) {
    const contactosActulizados = contactos.filter( contacto => contacto.id !== id);

    setContactos(contactosActulizados)
  }

  return (
    <div className='container mx-auto'>
      <Header />

      <div className="md:flex">
        <Formulario
          contactoEditar={contactoEditar}
          contactos={contactos}
          setContactos={setContactos}
          setContactoEditar={setContactoEditar}
        />
        <ListadoContactos 
          contactos={contactos}
          setContactoEditar={setContactoEditar}
          eliminarContacto={eliminarContacto}
        />
      </div>
    </div>
  )
}

export default App
