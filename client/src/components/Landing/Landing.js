import React, { useEffect } from 'react'
import { fetchUsers, deleteUser } from '../../ducks/users'
import { connect } from 'react-redux'
import './Landing.scss'

const Landing = ({ onFetchUsers, onDeleteUser, users }) => {
  useEffect(() => {
    onFetchUsers()
  }, [onFetchUsers])

  const handleDeleteUser = (event, id) => {
    event.preventDefault()

    onDeleteUser(id)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="dashboard-list-box invoices with-icons margin-top-20">
            <h4>Users</h4>
            <ul>
              {users &&
                users.map(({ id, firstName, lastName }) => (
                  <li key={id}>
                    <img
                      className="list-box-icon sl sl-icon-doc"
                      src="img_girl.jpg"
                      alt="Girl in a jacket"
                    />
                    <strong>{`${firstName} ${lastName}`}</strong>
                    <ul>
                      <li className="unpaid">Unpaid</li>
                      <li>Order: #00124</li>
                      <li>Date: 20/07/2019</li>
                    </ul>
                    <div className="buttons-to-right">
                      <span
                        onClick={event => handleDeleteUser(event, id)}
                        className="button gray">
                        Delete
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { users } = state.users.users

  return { users }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: name => dispatch(fetchUsers()),
    onDeleteUser: id => dispatch(deleteUser(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
