import React from 'react'

export default function Child(props) {

    const data2="heloo i am from child";
    props.onpass(data2);
  return (
    <div>
        <p>Child </p>
        <p>{props.data}</p>
    </div>
  )
}
