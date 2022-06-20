import { useEffect, useState } from "react"
import Error from "./Error";
import { generarID } from '../helpers/app'

const Formulario = ({contactoEditar, contactos, setContactos, setContactoEditar}) => {

  //States para los input del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [apodo, setApodo] = useState('');
  
  //State para mostrar error
  const [error, setError] = useState(false);

  useEffect( () => {
    if(Object.keys(contactoEditar).length > 0) {
      setNombre(contactoEditar.nombre);
      setApellido(contactoEditar.apellido);
      setTelefono(contactoEditar.telefono);
      setEmail(contactoEditar.email);
      setApodo(contactoEditar.apodo)
    }
  }, [contactoEditar]);

  function handleSubmit(e) {
    e.preventDefault();

    if([nombre, apellido, telefono, email, apodo].includes('')) {
      setError(true);

      setTimeout(() => {
        setError(false)
      }, 2000);
      return;
    }

    const contactoObj = {
      nombre, 
      apellido,
      telefono,
      email,
      apodo,
    }

    if(contactoEditar.id) {
      //Editando el registro
      contactoObj.id = contactoEditar.id;
      const contactosActualizados = contactos.map( contactoState => contactoState.id === contactoEditar.id ? contactoObj : contactoState);
      setContactos(contactosActualizados);
      setContactoEditar({})

    }else{
      //Nuevo registro
      contactoObj.id = generarID()
      setContactos([...contactos, contactoObj]);
    }

    //Reiniciar campos del form
    setNombre('');
    setApellido('')
    setEmail('')
    setTelefono('')
    setApodo('')
  }

  return (
    <div className='md:w-1/2 mt-10'>
      <h2 
      className='font-bold text-3xl md:w-3/4 mx-auto text-center md:text-left'
      >Agrega tus contactos</h2>

      <p className='mt-3 text-xl md:w-4/5 text-center'>
        Añade tus contactos para {''}
        <span className='text-indigo-500 font-bold'>Administrarlos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className='bg-white shadow rounded-lg mt-6 md:w-3/4 p-5 mx-3'
      > 
        {error && <Error />}
        <div className="campo">
          <label 
            className='block text-lg font-bold mt-4 mb-2'
            htmlFor="nombre"
          >Nombre:</label>
          <input 
            className='outline-0 border rounded w-full p-1 placeholder-slate-400 text-gray-700'
            type="text" 
            id="nombre" 
            placeholder="Nombre del contacto"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label 
            className='block text-lg font-bold mt-4 mb-2'
            htmlFor="apellido"
          >Apellido:</label>
          <input 
            className='outline-0 border rounded w-full p-1 placeholder-slate-400 text-gray-700'
            type="text" 
            id="apellido" 
            placeholder="Apellido del contacto"
            value={apellido}
            onChange={e => setApellido(e.target.value)}
          />
        </div>

        <div className="campo">
          <label 
            className='block text-lg font-bold mt-4 mb-2'
            htmlFor="telefono"
          >Telefono:</label>
          <input 
            className='outline-0 border rounded w-full p-1 placeholder-slate-400 text-gray-700'
            type="tel" 
            id="telefono" 
            placeholder="Telefono del contacto"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
          />
        </div>

        <div className="campo">
          <label 
            className='block text-lg font-bold mt-4 mb-2'
            htmlFor="email"
          >E-mail:</label>
          <input 
            className='outline-0 border rounded w-full p-1 placeholder-slate-400 text-gray-700'
            type="email" 
            id="email" 
            placeholder="Email del contacto"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="campo">
          <label 
            className='block text-lg font-bold mt-4 mb-2'
            htmlFor="apodo"
          >Apodo:</label>
          <input 
            className='outline-0 border rounded w-full p-1 placeholder-slate-400 text-gray-700'
            type="text" 
            id="apodo" 
            placeholder="Apodo del contacto"
            value={apodo}
            onChange={e => setApodo(e.target.value)}
          />
        </div>

        <input 
          className="w-full text-center bg-blue-600 text-white uppercase block mt-6 py-2 rounded hover:bg-blue-700 cursor-pointer transition-all font-bold outline-0"
          type="submit" 
          value={Object.keys(contactoEditar).length ? 'Editar Contacto' : 'Agregar contacto'}
        />
      </form>
    </div>
  )
}

export default Formulario