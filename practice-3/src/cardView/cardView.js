import React from "react";
import "./cardView.css";
import { useEffect, useState } from "react";

function CardView(props) {
  const [info, setInfo] = useState(props.info);
  useEffect(() => {
    setInfo(props.info);
  }, [props]);
  function createMarkUP() {
    return { __html: info.description };
  }
  return (
    <div id="container">
      <table>
        <tr>
          <td>
            <img src={info.image} className="card-img" alt="..." />
          </td>
          <td>
            <table>
              <tr>
                <td className="right">Name: </td>
                <td className="left">
                  {info.name} ({info.ageRating})
                </td>
              </tr>
              <tr>
                <td className="right">Average Rating: </td>
                <td className="left"> {info.averageRating}</td>
              </tr>
              <tr>
                <td className="right">Rating Rank: </td>
                <td className="left"> {info.ratingRank}</td>
              </tr>
              <tr>
                <td className="right">Number of Ep: </td>
                <td className="left"> {info.episodeCount}</td>
              </tr>
              <tr>
                <td className="right">created: </td>
                <td className="left"> {info.createdAt}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <p style={{ color: "white" }}>--About--</p>
      <div className="text" dangerouslySetInnerHTML={createMarkUP()}></div>
    </div>
  );
}

export default CardView;
