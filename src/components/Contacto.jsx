

const Contacto = ({contacto, setContactoEditar, eliminarContacto}) => {

  const { nombre, apellido, telefono, email, apodo, id } = contacto;

  const handleEliminar = () => {
    const respuesta = confirm('¿Desea eliminar este contacto?');

    if(respuesta) {
      eliminarContacto(id)
    }
  }

  return (
    <div className='bg-white rounded shadow mt-8 p-6 md:w-4/5 flex flex-col gap-2'>
      <p className='font-bold'>
        Nombre: {''}
        <span className='font-normal capitalize'>{nombre}</span>
      </p>

      <p className='font-bold'>
        Apellidos: {''}
        <span className='font-normal capitalize'>{apellido}</span>
      </p> 

      <p className='font-bold'>
        Telefono: {''}
        <span className='font-normal'>{telefono}</span>
      </p> 

      <p className='font-bold'>
        E-mail: {''}
        <span className='font-normal'>{email}</span>
      </p>

      <p className='font-bold'>
        Apodo: {''}
        <span className='font-normal'>{apodo}</span>
      </p>

      <div className="flex mt-4 gap-4">
        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded text-white font-bold transition-all'
          onClick={() => setContactoEditar(contacto)}
        >Editar</button>

        <button
          type='button'
          className='bg-red-600 hover:bg-red-700 py-2 px-4 rounded text-white font-bold transition-all'
          onClick={handleEliminar}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Contacto
