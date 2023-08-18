import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BiBed } from "react-icons/bi";
import { GrRestroom } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";


import '../tailwind.css'

import Formulario from './Formulario';
import Barra from './Barra';
const Detail = () => {
  const location = useLocation();
  const {id} = useParams();


  const [data, setData] = useState([]);


    useEffect(() => {
        // Realizar la solicitud a la API cuando el componente se monta
        axios.get(`http://192.168.1.89:8000/casaHogarDetail/${id}`)
          .then(response => {
            setData(response.data); 
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
      }, [id]);


      console.log(data)
  // Aquí podrías realizar una solicitud a la API para obtener los detalles basados en el ID




  return (


    <div className="container mx-auto mt-20 ">
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h1 className='text-xl  '>Detalles</h1>
          <h3 className='text-lg mb-4'></h3>
        </div>

        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 text-white'></div>
          {/* <div>
          <Link to='/' className='text-violet-700 text-sm'>
                View List
              </Link>

              
</div> */}
          <h2 className='text-lg'>Precio</h2>
          <h2 className='text-lg'>${data.precio}</h2>
        </div>

      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px] mr-4  '>
          <div className="mb-8 p-5">
            <img src={data.imagen} alt="" />
          </div>
          <div className='flex gap-x-6 mb-6'>
            <div className='flex gap-x-2 text-lg' >
              
              {/* <p>camas</p> */}
              <BiBed className="icon-lg"/>
              <div className='mr-3'>{data.camas} Camas</div>

              <GrRestroom className="icon-lg"/>
              <div className='mr-3'>{data.banyos} Baños</div>

              <FaPeopleGroup className="icon-lg"/>
              <div className='mr-3'>{data.capacidad} Capacidad</div>

              <MdMeetingRoom className="icon-lg"/>
              <div className='mr-3'>{data.habitaciones} Habitaciones</div>
            </div>
          </div>
          <div className='mb-10 p-4'>

          <h2>Descripcion:</h2>
          <div> {data.descripcion}</div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <div className='mb-8'>

              <div>Numero de casa o habitacion: {data.numero}</div>
              <h2 className='text-lg'>Precio</h2>
          <h2 className='text-lg'>${data.precio}</h2>
              </div>

          <div className='mt-15'>
              <Formulario data={data}/>
          </div>
           <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail