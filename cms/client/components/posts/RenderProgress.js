import { Progress } from "antd"
import CountUp from 'react-countup'
import Link from 'next/link'

const RenderProgress = ({number , name ,link = '#'}) => {
    console.log("number " , number)
    return(
    <Link href = {link}>
    <a>
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '50%': '#fff',
        '100%': '#87d068',
      }}
      percent={100}
      format = {() => <CountUp start= {0} end = {number}/>}
    />
    <p style ={{ marginTop: 18 , color: '#666' }}>{name.toUpperCase()}</p>
    </a>
    </Link>
    )
}
export default RenderProgress