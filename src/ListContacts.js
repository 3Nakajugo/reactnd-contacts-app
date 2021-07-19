

import React from 'react'
import propType from 'prop-types'
import { prototype } from 'eventemitter3'

function ListContacts(props) {
  return (
    <ol className='contact-list'>
      {
        props.contacts.map(contact => (<li key={contact.id} className='contact-list-item'>
          <div className="contact-avatar" style={{ backgroundImage: `url(${contact.avatarURL})` }}>

          </div>
          <div className="contact-details">
            <p>
              {contact.name}
            </p>
            <p>
              @{contact.handle}
            </p>
          </div>
          <button className="contact-remove" onClick={()=>{props.RemoveContact(contact)}}>remove</button>


        </li>
        ))
      }

    </ol>
  )
}

ListContacts.propType = {
  contacts:propType.array.isRequired,
  RemoveContact:propType.func.isRequired

}
export default ListContacts

    