import React from 'react'

function Info() {
  return (
    <div className=' px-5 my-3 rounded' style={{backgroundColor: "#ffffff" }}>
    <div className='py-5' style={{ backgroundColor: '' }}>
        <div className='container'>
        <h2 className='text-center fw-bold text-decoration-underline' style={{ color: '#3cb043' }}>Welcome to Chen's Group</h2>
            <p className='fw-medium'>
            Welcome to our lab website! Our lab is exploring several topics in the field of Digital Chemistry, computational materials design, and applied AI for scientific discovery. Our Group is passionate about the interface between Chemistry and Computer Science and has a strong devotion to the mission of fusing chemical knowledge with state-of-the-art computer science to develop and deploy best-in-class solutions to help address global environmental sustainability challenges, such as changing climate and plastic re/up-cycling.
            </p>
            <p className='fw-medium'>
            Professor Chen is seeking applications for a PhD studentship on deep learning; the student can be based in Chemistry or Computer Science. If you are interested, please contact Prof. Linjiang Chen.
            </p>
            </div>

        </div>
        </div>
  )
}

export default Info