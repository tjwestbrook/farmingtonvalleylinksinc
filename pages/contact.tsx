import { NextPage } from 'next';

const sendEmail = (/*event*/) => {
  // event.preventDefault() //do not redirect the page
  // submit email
}

const Contact: NextPage = () => {
  return (
    <form onSubmit={sendEmail} className='contact'>
      <label htmlFor='fname'>First Name</label>
      <br />
      <input type='text' id='fname' name='firstname' required />
      <br /><br />
      <label htmlFor='lname'>Last Name</label>
      <br />
      <input type='text' id='lname' name='lastname' required />
      <br /><br />
      <label htmlFor='subject'>Subject</label>
      <br />
      <textarea id='subject' name='subject' style={{height: '200px'}}></textarea>
      <br /><br />
      <button type='submit'>Send Email</button>
    </form>
  );
}

export default Contact;