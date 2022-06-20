import Contacto from "./Contacto"

const ListadoContactos = ({contactos, setContactoEditar, eliminarContacto}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 mt-10 md:h-screen md:overflow-y-auto mx-3 md:mx-0'>
      <h2 
      className='font-bold text-3xl md:w-3/4 text-center'
      >{Object.keys(contactos).length > 0 ? 'Listado de Contactos' : 'No hay Contactos' }</h2>

      <p className='mt-3 text-xl md:w-4/5 text-center'>
        Administra tus {''}
        <span className='text-indigo-500 font-bold'>Contactos</span>
      </p>

      {contactos.map( contacto => (
        <Contacto 
          key={contacto.id}
          contacto={contacto}
          setContactoEditar={setContactoEditar}
          eliminarContacto={eliminarContacto}
        />
      ))}
      
    </div>
  )
}

export default ListadoContactos