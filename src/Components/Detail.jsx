import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AiFillAlert } from "react-icons/ai";

import '../tailwind.css'

const Detail = () => {
  const location = useLocation();
  const { capacidad } = useParams();



  // Aquí podrías realizar una solicitud a la API para obtener los detalles basados en el ID




  return (


    <div className="container mx-auto mt-20">
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2x1 font-semibold'>Capacidad :{capacidad}</h2>
          <h3 className='text-lg mb-4'>2</h3>
        </div>

        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-green-500 text-white'>Capacidad :{capacidad}</div>
          <div className='bg-violet-500 text-white'>Capacidad :{capacidad}</div>
        </div>

      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className="mb-8">
            <img src="https://img.freepik.com/foto-gratis/villa-lujo-piscina-espectacular-diseno-contemporaneo-arte-digital-bienes-raices-hogar-casa-propiedad-ge_1258-150749.jpg?w=1380&t=st=1692383024~exp=1692383624~hmac=24c47070441238ae38ac72a7e769721812aee7aa6cbf7beaeb379f0929d853ae" alt="" />
          </div>
          <div className='flex gap-x-6 mb-6'>
            <div className='flex gap-x-2' >
              <AiFillAlert className='text-2x3'/>
              <div>2</div>
            </div>
          </div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit iure quibusdam asperiores accusantium, enim earum aut facilis doloribus itaque. Magnam, libero vitae fugit totam nesciunt earum a laudantium numquam.</div>
        </div>

        <div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <div>Name</div>
              <Link to='/' className='text-violet-700 text-sm'>
                View List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail