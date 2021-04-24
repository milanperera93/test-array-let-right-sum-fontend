import { useEffect, useState } from "react";
import "./infoContainer.scss";

interface InfoContainerProps {
  description?: string;
  steps?: string[];
}

interface Response {
  error: boolean;
  message: string|number
}

function InfoContainer({ description, steps }: InfoContainerProps) {

  const [inputText, setInputText] = useState<string>("")
  const [validated, setValidated] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState <Response> ({error: false, message: ""})

  useEffect(() => {
      let regex = /^\d+(,\d+)*$/;
      setInputText(inputText.replace(/\s+/g, ""));
      if(regex.test(inputText) && inputText.length >0){
        setValidated(true)
      }else if (inputText.length > 0) {
        setValidated(false);
      }
  }, [inputText, validated]);


  const leftRightSum = ()=>{
    const intInputArray = inputText.split(`,`).map((x) => +x);
    setLoading(true);
    const data = { input_array: intInputArray };
    fetch("http://localhost:5000/left-right-sum", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data)
        setLoading(false);
      })
      .catch((err) => {
        // onError
        setLoading(false);
      });
  }


  return (
    <div className="info-container">
      <div className="description">{description}</div>
      <div className="step-container">
        {steps?.map((step, key) => (
          <div key={key} className="step">
            <div>{key + 1}.</div>
            <div style={{ marginLeft: 5 }}> {step}</div>
          </div>
        ))}
      </div>
      <div className="footer-text">
        You can try using a sample arrays below. Have fun!
      </div>
      <div className="input-container">
        <div className="form__group field">
          <input
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
            type="input"
            className="form__field"
            placeholder="Input Array"
            name="input_array"
            id="input_array"
            required
          />
          <label className="form__label">
            Input Array (Comma Separated Integer Array Elements)
          </label>
        </div>
      </div>
      {!validated && (
        <div className="error-container {">
          Please use a valid input. Hint: Don't use a trailing comma and only
          numbers are allowed.
        </div>
      )}

      <div className="button-container">
        {validated && !loading && inputText.length > 0 ? (
          <button onClick={leftRightSum} className="go-button-active">
            go
          </button>
        ) : (
          <button className="go-button-inactive">go</button>
        )}
      </div>
      <div className="result-container">
        <div className="result-field">{inputText.length > 0 ? response.message: ""}</div>
      </div>
    </div>
  );
}

export default InfoContainer;
