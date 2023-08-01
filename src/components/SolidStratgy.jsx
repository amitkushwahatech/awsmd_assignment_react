import React, { useState } from "react";
import CardVideo from "./CardVideo";
import card_list from "../data/data";
const SolidStratgy = () => {
  const [citem, setCitem] = useState(card_list);
  return (
    <div className="solid_div">
      {/* part 1 */}
      <div className="solid_div_1">
        <p className="solid_title" data-text="Solid Strategy">
          Solid Strategy aligned with business needs and robust data analysis
          are fundamental ingredients to extract actionable insights
        </p>
        <h3>Some Number About Us</h3>

        <ul className="about_cards_ul">
          {citem.map((item) => (
            <li className="about_card_list" key={item.card_title}>
              <CardVideo
                card_title={item.card_title}
                card_para={item.card_param}
                card_video={item.card_video}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* part 2 */}
      <div className="solid_div_right">
        <div className="draw_circle">
          <div className="circl_box">
            <div
              className="circl_box_circle circl_graph_item"
              data-circle="true"
              style={{
                width: "100%",
                height: "100%",
                top: "0%",
                right: "0%",
              }}
            ></div>
            <div
              className="circl_box_circle circl_graph_item"
              data-circle="true"
              style={{
                width: "85.4%",
                height: "85.4%",
                top: "2.13812%",
                right: "2.13812%",
              }}
            >
              <p
                className="circle_point about_circle_circle_point"
                data-label="A/B Testing"
                data-point="false"
                style={{ top: "93.3013%", right: "25%" }}
              ></p>
              {/* growth */}
              <p
                className="circle_point  circle_point_circle_point_pointmain

                  about_circle_circle_point
                  circle_point_circle_pointmain "
                data-label="Growth"
                data-point="true"
                style={{ top: "85.3553%", right: "85.3553%" }}
              ></p>
              {/* Experiments */}
              <p
                className="circle_point about_circle_circle_point"
                data-label="Experiments"
                data-point="false"
                style={{ top: "54.3578%", right: "99.8097%" }}
              ></p>
              {/* Optimization */}
              <p
                className="circle_point about_circle_circle_point"
                data-label="Optimization"
                data-point="false"
                style={{ top: "25%", right: "93.3013%" }}
              ></p>
            </div>
            <div
              class="circl_box_circle circl_graph_item"
              data-circle="true"
              style={{width: "68.14%", height: "68.14%", top: "4.66579%", right: "4.66579%"}}
            >
              <p
                class="circle_point about_circle_circle_point"
                data-label="Development"
                data-point="false"
                style={{top: "88.3022%", right: "17.8606%"}}
              ></p>
              <p
                class="circle_point about_circle_circle_point"
                data-label="Visual Design"
                data-point="false"
                style={{top: "99.8097%", right: "45.6422%"}}
              ></p>
              <p
                class="circle_point circle_point_circle_point_pointmain
                about_circle_circle_point circle_point_circle_pointmain"
                data-label="Insights"
                data-point="true"
                style={{top: "85.3553%", right: "85.3553%"}}
              ></p>
              <p
                class="circle_point about_circle_circle_point"
                data-label="User Experience"
                data-point="false"
                style={{top: "54.3578%", right: "99.8097%"}}
              ></p>
              <p
                class="circle_point about_circle_circle_point"
                data-label="Innovations"
                data-point="false"
                style={{top: "32.899%", right: "96.9846%"}}
              ></p>
            </div>
            <div
              class="circl_box_circle circl_graph_item"
              data-circle="true"
              style={{width: "42%", height: "42%", top: "8.4939%", right: "8.4939%"}}
            >
              <p
                class="circle_point circle_point_circle_point_pointmain
                about_circle_circle_point circle_point_circle_pointmain"
                data-label="Product"
                data-point="true"
                style={{top: "14.6447%", right: "14.6447%"}}
              ></p>
              <p
                class="circle_point about_circle_circle_point"
                data-label="Data Science"
                data-point="false"
                style={{top: "82.1394%",right: "11.6978%"}}
              ></p>
              <p
                class="circle_point about_circle_circle_point"
                data-label="UX Research"
                data-point="false"
                style={{top: "95.3154%", right: "71.1309%"}}
              ></p>
              <p
                class="circle_point about_circle_circle_point"
                data-label="UX Strategy"
                data-point="false"
                style={{top: "50%",
                right: "100%"}}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolidStratgy;
