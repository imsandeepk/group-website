import React from 'react';

export default function Contact() {


  return (
    <div className='my-5 container rounded' style={{ backgroundColor: 'rgb(80, 107, 142,0.9)' }}>
      <div className='py-5' style={{ display: 'flex', alignItems: 'center' }}>
        <div className='container py-5'>
          <form>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email address or Name
              </label>
              <input type='email' className='form-control' id='email' name='email' />
            </div>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input type='text' className='form-control' id='name' name='name' />
            </div>
            <div className='mb-3'>
              <label htmlFor='message' className='form-label'>
                Message
              </label>
              <textarea className='form-control' id='message' name='message' rows='8' placeholder='Message'></textarea>
            </div>
            <button type='submit' className='btn btn-primary my-3 btn-lg'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
