// Example from https://beta.reactjs.org/learn





import Image from 'next/image'


{/* Import CSS modules */}










import { useState } from 'react'
import styles from './counters.module.css'

function ImageSample(props) {


  return (
    <div>
    <div  style={{
          marginTop:"30px",
          display: "flex",
          justifyContent: "center",
        }}>
    <Image src={props.path} width="800" height="800" alt="hello" />
    </div>
    </div>
  )
}

export default function MyApp(props) {
  return <ImageSample  path={props.path}/>
}