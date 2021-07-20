

import React from 'react'
import propType from 'prop-types'
import { Link } from 'react-router-dom'
class ListContacts extends React.Component {
  static propTypes = {
    contacts: propType.array.isRequired,
    RemoveContact: propType.func.isRequired

  }
  state = {
    query: ''
  }
  onchange = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))

  }
  clearQuery = () => {
    this.onchange('')
  }
  render() {
    const { query } = this.state
    const { contacts, RemoveContact } = this.props

    const showingContacts = query === ''
      ? contacts
      : contacts.filter((c) => (
        c.name.toLowerCase().includes(query.toLowerCase())
      ))

    return (
      <div className='list-contacts'>
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search contacts"
            value={this.state.query}
            onChange={(event) => { this.onchange(event.target.value) }}
          />
          <Link to="/create" className="add-contact"> Add Contact

          </Link>
        </div>
        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length}</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}
        <ol className='contact-list'>
          {
            showingContacts.map(contact => (<li key={contact.id} className='contact-list-item'>
              <div className="contact-avatar" style={{ backgroundImage: `url(${contact.avatarURL})` }}>

              </div>
              <div className="contact-details">
                <p>
                  {contact.name}
                </p>
                <p>
                  {contact.handle}
                </p>
              </div>
              <button className="contact-remove" onClick={() => { RemoveContact(contact) }}>remove</button>
            </li>
            ))
          }
        </ol>
      </div>
    )
  }
}

export default ListContacts
