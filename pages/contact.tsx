import { NextPage } from 'next';

const sendEmail = (/*event*/) => {
  // event.preventDefault() //do not redirect the page
  // submit email
}

const Contact: NextPage = () => {
  return <>
    <form onSubmit={sendEmail} className='contact'>
      <label htmlFor='name'>Name</label>
      <br />
      <input type='text' id='fname' name='name' required />
      <br /><br />
      <label htmlFor='name'>Email</label>
      <br />
      <input type='text' id='email' name='emailaddress' required />
      <br /><br />
      <label htmlFor='subject'>Message</label>
      <br />
      <textarea id='subject' name='subject' style={{height: '200px', width: '61.8%'}}></textarea>
      <br /><br />
      <button type='submit'>Send</button>
    </form>
  </>
}

export default Contact;