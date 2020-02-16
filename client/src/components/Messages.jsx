import React from 'react'

const Message = props => {
  return (
    <div className="singleMessage box">
      <p>
        {props.message.message}{' '}
        <span className="tag is-info" onClick={props.handleClick}>
          create Report
        </span>
      </p>
    </div>
  )
}
const Messages = props => {
  const data = props.messages.map((message, index) => (
    <Message
      key={index}
      message={message}
      handleClick={props.handleClick.bind(this, index)}
    />
  ))
  return <div className="container">{data}</div>
}
export default Messages
