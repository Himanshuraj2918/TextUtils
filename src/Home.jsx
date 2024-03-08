import { useState } from "react";
import Button from "./Button";
import Subtext from "./Subtext";
import AnalyzeText from "./AnalyzeText";
import copy from "copy-to-clipboard";
import SuccessBanner from './Alert'
import Navbar from "./Navbar";

function Home() {
    const [text, setText] = useState("");
    const [copyText, setCopyText] = useState("");
    const [alert, setAlert] = useState(null)
  
    const showAlert = (message,typepass) => {
      setAlert({
        msg: message,
       
      })
  
      setTimeout(() => {
        setAlert(null)
      }, 2000)
  
    }
  
    const convertUppercase = () => {
      if (!text) {
        showAlert("Enter Some Text First","CheckCircle")
        return
      }
      let newLine = text.toUpperCase();
      setText(newLine);
      setCopyText(newLine);

      showAlert("SUCCESSFULLY CONVERTED TO UPPERCASE")
    };
  
  
  
  
    const convertLowercase = () => {
      if (!text) {
        showAlert("Enter Some Text First")
        return
      }
      let newLine = text.toLowerCase();
      setText(newLine);
      setCopyText(newLine);

      showAlert("successfully converted to lowercase")
    };
  
    const handleChange = (e) => {
      setText(e.target.value);
      setCopyText(e.target.value);
    };
  
    const resetText = () => {
      setText("");
    };
  
    const copyToClipboard = () => {
      if (!text) {
        showAlert("Enter Some Text First")
        return
      }
      copy(copyText);
      showAlert("Copy To Clipboard")
  
    };
  
    function splito() {
      if (text.length === 0) {
        return 0;
      } else {
        return text.split(/\s+/).filter((element)=> {return element.length!==0}).length;
      }
    }

    return (
      <>
  
      <div className="h-5 w-[100%] sticky top-0">
          <SuccessBanner alert={alert} />
        </div>
        <div className="flex flex-col items-center justify-center  h-lvh bg-slate-900 max-[700px]:hidden ">
          <div>
 
            <AnalyzeText className text={text} onChangeo={handleChange} />
  
            <div>
              <div className="flex justify-between">
                <Button width={150} heading="Upper" onClick={convertUppercase} />
                <Button width={150} heading="Lower" onClick={convertLowercase} />
                <Button width={150} heading="Reset" onClick={resetText} />
                <Button width={150} heading="Copy" onClick={copyToClipboard} />
              </div>
            </div>
  
            <div>
              <Subtext text={text} splitF={splito} />
            </div>
           
          </div>
        </div>
  
       {/* **************************************Less Than 700px code are below till 450px***************************************** */}

      <div className="flex flex-col items-center justify-center  h-lvh bg-slate-900 min-[700px]:hidden max-[550px]:hidden">
        <div>
          <AnalyzeText text={text} onChangeo={handleChange} row={10} col={60} />
          <div>
            <div className=" flex  justify-between ">
              <Button heading="Upper" onClick={convertUppercase} />
              <Button heading="Lower" onClick={convertLowercase} />
              <Button heading="Reset" onClick={resetText} />

              <Button heading="Copy" onClick={copyToClipboard} />
            </div>
          </div>

          <div>
            <Subtext text={text} splitF={splito} />
          </div>
        </div>
      </div>

      {/* ******************************************************From 450px ******************************************** */}

      <div className="flex items-center justify-center mt-5 h-[100%] bg-slate-900 min-[550px]:hidden max-[390px]:hidden">
        <div>
          <AnalyzeText text={text} onChangeo={handleChange} row={10} col={40} />
          <div>
            <div className=" flex flex-col  flex-wrap gap-y-7 ml-2 mr-2">
              <div className="flex justify-around">
                <Button heading="Upper" onClick={convertUppercase} />
                <Button heading="Lower" onClick={convertLowercase} />
              </div>

              <div className="flex justify-around">
                <Button heading="Reset" onClick={resetText} />
                <Button heading="Copy" onClick={copyToClipboard} />
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Subtext text={text} splitF={splito} />
          </div>
        </div>
      </div>

      {/* *****************************************From 390px ******************************************* */}

      <div className=" flex justify-center items-center mt-5 h-[100%] bg-slate-900 min-[390px]:hidden ">
        <div>
          <AnalyzeText text={text} onChangeo={handleChange} row={7} col={30} />
          <div>
            <div className=" flex flex-col  flex-wrap gap-y-7 ml-2 mr-2">
              <div className="flex justify-around">
                <Button heading="Upper" onClick={convertUppercase} />
                <Button heading="Lower" onClick={convertLowercase} />
              </div>

              <div className="flex justify-around">
                <Button heading="Reset" onClick={resetText} />
                <Button heading="Copy" onClick={copyToClipboard} />
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Subtext text={text} splitF={splito} />
          </div>
        </div>
      </div>
      </> 
    );
}

export default Home
