import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.15752-9/432222451_1526118461282411_6001134331912082484_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iRoESQ0f2ocAX_ggSRW&_nc_ht=scontent.fbkk2-8.fna&oh=03_AdTxLFptrpcVqB-QodZCGZ3MU0EiPn88OjkwUnkrEBPi7A&oe=66268C15" />

        <Title title="Apisit Yahtian (Ming)">
          <h3>ตำแหน่ง : Design</h3>
        </Title>

        <Title title="Contact">

          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/07/28").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +6648519457
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202068@ssru.ac.th</p>
          
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>อยากนำทักษะความรู้ต่างๆที่มี  มาใช้การทำงานเเละช่วยในการพัฒนาองค์กร ไม่มากก็น้อย เเต่นักศึกษามีความสนใจในการทำงานองค์กร จึงอยากเข้ามาศึกษาเเละพัฒนาความรู้ความสามารถขึ้นไปอีก.</p>
        </Title>

        <Title title="Work Experience">
          <p>ปี2564ร่วมทำงานกับ Thai PBS ทำหน้าที่ใส่ซับไตเติ้ลเเละตรวจสอบคลิปวิดิโอ</p>
        </Title>

        <Title title="Skills">
          <p>Microsoft word</p>
          <p>photoshop</p>
          <p>adobe premiere</p>
          <p>Git</p>
          <p>Git hub</p>
        </Title>
      </div>
    </main>
  )
}

export default App