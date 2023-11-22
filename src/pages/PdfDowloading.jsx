import React, { useEffect, useState } from "react";
import Logo from "./../images/Logo.png";
import footerFirst from "./../images/footerFirst.png";
import footerSecond from "./../images/footerSecond.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "../components/ChangingProgressProvider";
import { useLocation, useHistory } from "react-router";
import api from "../api/api";

export const PdfDowloading = () => {
  const location = useLocation().search;
  const history = useHistory();
  const pdf_id = location.slice(4);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/download", {
        responseType: "blob",
        params: {
          id: pdf_id,
        },
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `appraisal.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        if(error.response){
          setError(error ? "Sorry, QR's term has been expired" : error.response.statusText)
        }
      });
  }, [pdf_id]);

   useEffect(() => {
    setTimeout(() => {
      history.push('/thank_you')
    }, 6000)
  }, [history])
  return (
    <div className="wrapper">
      <div className="wrapper__inner">
        <img src={Logo} alt="logo.png" className="logo" />
        {error ? (
          <div className="response_error">{error}</div>
        ) : (
          <div className="wrapper__block">
            <Example>
              <ChangingProgressProvider values={[0, 100]}>
                {(percentage) => (
                  <CircularProgressbar
                    value={percentage}
                    text="PDF"
                    styles={buildStyles({
                      pathTransition:
                        percentage === 0
                          ? "none"
                          : "stroke-dashoffset 0.5s ease 0s",
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </Example>
            <div className="wrapper__text">PDF downloading</div>
          </div>
        )}
      </div>
      <div className="footer">
        <img
          src={footerSecond}
          alt="footer.png"
          className="footerSecond__img"
        />
        <img src={footerFirst} alt="footer.png" className="footerFirst__img" />
      </div>
    </div>
  );
};
function Example(props) {
  return (
    <div style={{ marginBottom: 27 }}>
      <div style={{ marginTop: 27, display: "flex", alignItems: "center" }}>
        <div style={{ width: "60px", height: "60px" }}>{props.children}</div>
      </div>
    </div>
  );
}
