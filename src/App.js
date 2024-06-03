// import './App.css';
// import {QRCodeSVG} from 'qrcode.react';
// import {QRCodeCanvas} from 'qrcode.react';
import Player2 from './player2';
import 'video-react/dist/video-react.css'; // import css
import SimpleForm from './asimpleform';
import FormikForm from './fromikForm';
import FormikformWithVaildate from './formikformWithVaildate';
import FormikFormWithYUP from './formikFormWithYUP';


function App() {
  return ( 
    <div className="App">
      <h1>智商三乙</h1>
      <a>劉哲瑋</a>
      {/* <FormikForm></FormikForm> */}
      {/* <FormikformWithVaildate></FormikformWithVaildate> */}
      {/* <FormikFormWithYUP></FormikFormWithYUP> */}
      {/* <h2>elearning</h2>
      <QRCodeSVG
        value={"https://elearning.nkust.edu.tw/learn/index.php"}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
      />
      <h2>Porsche Mark</h2>
      <QRCodeSVG
        value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
        imageSettings={{
          src: "https://upload.wikimedia.org/wikipedia/zh/5/55/Porsche_logo.png",
          x: undefined,
          y: undefined,
          height: 24,
          width: 24,
          excavate: true,
        }}
      />
      <h2>Porsche</h2>
      <QRCodeCanvas
        value={"https://www.porsche.com/taiwan/zh-tw/"}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
      /> */}
        {/* <Player2 /> */}
    </div>
  );
}

export default App;
