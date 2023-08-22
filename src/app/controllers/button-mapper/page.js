"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import styles from "../../../styles/page.module.scss";

const buttonList = [
  { button: "↑", value: "↑" },
  { button: "↓", value: "↓" },
  { button: "←", value: "←" },
  { button: "→", value: "→" },
  { button: "cU", value: "cU" },
  { button: "cD", value: "cD" },
  { button: "cL", value: "cL" },
  { button: "cR", value: "cR" },
  { button: "A", value: "A" },
  { button: "B", value: "B" },
  { button: "X", value: "X" },
  { button: "Y", value: "Y" },
  { button: "L", value: "L" },
  { button: "R", value: "R" },
  { button: "Z", value: "Z" },
  { button: "LS", value: "LS" },
  { button: "MS", value: "MS" },
  { button: "mX", value: "mX" },
  { button: "mY", value: "mY" },
  { button: "St", value: "St" },
];

const Select = ({ value, selected, onChange }) => {
  return (
    <select defaultValue={selected} value={value} onChange={onChange}>
      {buttonList.map((button) => {
        return (
          <option key={button.value} value={button.value}>
            {button.button}
          </option>
        );
      })}
    </select>
  );
};

export default function ButtonMapper() {
  const [buttonOne, setButtonOne] = useState();
  const [buttonTwo, setButtonTwo] = useState();
  const [buttonThree, setButtonThree] = useState();
  const [buttonFour, setButtonFour] = useState();
  const [buttonFive, setButtonFive] = useState();
  const [buttonSix, setButtonSix] = useState();
  const [buttonSeven, setButtonSeven] = useState();
  const [buttonEight, setButtonEight] = useState();
  const [buttonNine, setButtonNine] = useState();
  const [buttonTen, setButtonTen] = useState();
  const [buttonEleven, setButtonEleven] = useState();
  const [buttonTwelve, setButtonTwelve] = useState();
  const [buttonThirteen, setButtonThirteen] = useState();
  const [buttonFourteen, setButtonFourteen] = useState();
  const [buttonFifteen, setButtonFifteen] = useState();
  const [buttonSixteen, setButtonSixteen] = useState();
  const [buttonSeventeen, setButtonSeventeen] = useState();
  const [buttonEighteen, setButtonEighteen] = useState();
  const [buttonNinteen, setButtonNinteen] = useState();
  const [buttonTwenty, setButtonTwenty] = useState();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar />

        <div className="button-mapper-container">
          <h1>Box Button Mapper</h1>

          <div className="note">
            Note: This is purely built to screenshot and share custom box
            controller layouts.
          </div>

          <div className="controller-wrapper">
            <div className="button one">
              <Select
                value={buttonOne}
                options={buttonList}
                onChange={(e) => setButtonOne(e.target.value)}
                selected="L"
              />
            </div>

            <div className="button two">
              <Select
                value={buttonTwo}
                options={buttonList}
                onChange={(e) => setButtonTwo(e.target.value)}
                selected="←"
              />
            </div>

            <div className="button three">
              <Select
                value={buttonThree}
                options={buttonList}
                onChange={(e) => setButtonThree(e.target.value)}
                selected="↓"
              />
            </div>

            <div className="button four">
              <Select
                value={buttonFour}
                options={buttonList}
                onChange={(e) => setButtonFour(e.target.value)}
                selected="→"
              />
            </div>

            <div className="button five">
              <Select
                value={buttonFive}
                options={buttonList}
                onChange={(e) => setButtonFive(e.target.value)}
                selected="mX"
              />
            </div>

            <div className="button six">
              <Select
                value={buttonSix}
                options={buttonList}
                onChange={(e) => setButtonSix(e.target.value)}
                selected="mY"
              />
            </div>

            <div className="button seven">
              <Select
                value={buttonSeven}
                options={buttonList}
                onChange={(e) => setButtonSeven(e.target.value)}
                selected="St"
              />
            </div>

            <div className="button eight">
              <Select
                value={buttonEight}
                options={buttonList}
                onChange={(e) => setButtonEight(e.target.value)}
                selected="cL"
              />
            </div>

            <div className="button nine">
              <Select
                value={buttonNine}
                options={buttonList}
                onChange={(e) => setButtonNine(e.target.value)}
                selected="cD"
              />
            </div>

            <div className="button ten">
              <Select
                value={buttonTen}
                options={buttonList}
                onChange={(e) => setButtonTen(e.target.value)}
                selected="cU"
              />
            </div>

            <div className="button eleven">
              <Select
                value={buttonEleven}
                options={buttonList}
                onChange={(e) => setButtonEleven(e.target.value)}
                selected="A"
              />
            </div>

            <div className="button twelve">
              <Select
                value={buttonTwelve}
                options={buttonList}
                onChange={(e) => setButtonTwelve(e.target.value)}
                selected="cR"
              />
            </div>

            <div className="button thirteen">
              <Select
                value={buttonThirteen}
                options={buttonList}
                onChange={(e) => setButtonThirteen(e.target.value)}
                selected="B"
              />
            </div>

            <div className="button fourteen">
              <Select
                value={buttonFourteen}
                options={buttonList}
                onChange={(e) => setButtonFourteen(e.target.value)}
                selected="X"
              />
            </div>

            <div className="button fifteen">
              <Select
                value={buttonFifteen}
                options={buttonList}
                onChange={(e) => setButtonFifteen(e.target.value)}
                selected="Z"
              />
            </div>

            <div className="button sixteen">
              <Select
                value={buttonSixteen}
                options={buttonList}
                onChange={(e) => setButtonSixteen(e.target.value)}
                selected="↑"
              />
            </div>

            <div className="button seventeen">
              <Select
                value={buttonSeventeen}
                options={buttonList}
                onChange={(e) => setButtonSeventeen(e.target.value)}
                selected="R"
              />
            </div>

            <div className="button eighteen">
              <Select
                value={buttonEighteen}
                options={buttonList}
                onChange={(e) => setButtonEighteen(e.target.value)}
                selected="Y"
              />
            </div>

            <div className="button ninteen">
              <Select
                value={buttonNinteen}
                options={buttonList}
                onChange={(e) => setButtonNinteen(e.target.value)}
                selected="LS"
              />
            </div>

            <div className="button twenty">
              <Select
                value={buttonTwenty}
                options={buttonList}
                onChange={(e) => setButtonTwenty(e.target.value)}
                selected="MS"
              />
            </div>
          </div>

          <div className="hint">Hint: To reset, refresh the page.</div>
        </div>
      </div>
    </main>
  );
}
