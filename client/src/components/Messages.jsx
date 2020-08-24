import React, { Fragment } from 'react'
import { Layout, Card, Tag, Button } from 'antd'

const Message = (props) => {
  return (
    <Layout>
      <Card hoverable className='singleMessage'>
        <p>{props.message.content} </p>
        <Button onClick={props.handleClick}>create Report</Button>
      </Card>
    </Layout>
  )
}
const Messages = (props) => {
  const data = props.messages.map((message, index) => (
    <Message
      key={index}
      message={message}
      handleClick={props.handleClick.bind(this, index)}
    />
  ))
  return <div className='messagesBox'>{data}</div>
}
export default Messages
