import React from 'react'

const Header = () => {
  return (
    <div id='main'>
        <div className="header-heading">
            <h3>¡Reserva tu estancia ideal ahora mismo y asegura unas vacaciones inolvidables!</h3>
            <h1><span>Vive </span>momentos <br/>inolvidables</h1>
            {/* <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus culpa cumque facilis, fugiat, error voluptates expedita perspiciatis eligendi sapiente, optio odit voluptate officia repudiandae delectus tempore odio quos necessitatibus reprehenderit.</p> */}
            <div className="header-btns">
                <a href="#" className='header-btn'>Reservar</a>
            </div>
        </div>

    </div>
  )
}

export default Header