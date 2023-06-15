import React from 'react'

export default function Contact() {
  return (
    <div className=' my-5 container rounded' style={{backgroundColor: "rgb(80, 107, 142,0.9)",  }}>
      <div className='py-5' style={{ display: 'flex', alignItems: 'center' }}>
    <div className='container py-5'>
        <div class="mb-3" >
  <label for="exampleFormControlInput1" class="form-label" >Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" ></textarea>
  <button type="button" class="btn btn-primary my-3 btn-lg">Send</button>
  </div>
  </div>
</div>
    </div>
  )
}
