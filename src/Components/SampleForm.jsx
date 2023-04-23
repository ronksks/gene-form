import React, { useState } from "react";
import "../Styles/SampleFormStyle.css";

import SampleBag from "./SampleBag";
import TestComponent from "./TestComponent";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SampleForm = () => {
  const [bagNumber, setBagNumber] = useState(1);
  const [scannedData, SetScannedData] = useState("");
  const [sampleBags, setSampleBags] = useState([]);

  //   function getTotalSampleBagWeight(sampleBags) {
  //     return sampleBags.reduce((totalWeight, bag) => {
  //       return totalWeight + parseFloat(bag.weight || 0);
  //     }, 0);
  //   }
  // const handleAddSampleBag = (newSampleBag) => {
  //   setSampleBags([...sampleBags, newSampleBag]);
  // };

  const handleAddSampleBag = () => {
    const newSampleBag = { bagId: "", bagWeight: "", bagBarcode: "" };
    setSampleBags([...sampleBags, newSampleBag]);
  };

  const handleSampleBagChange = (index, bagData) => {
    setSampleBags((prevSampleBags) => {
      const newSampleBags = [...prevSampleBags];
      newSampleBags[index] = bagData;
      return newSampleBags;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sampleBags);
  };
  return (
    <div className="form-container">
      <h2>Sample Form</h2>
      <div className="form-group">
        <Form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="seedsWeight">Seeds weight (grams):</label>
            <input type="text" id="seedsWeight" name="seedsWeight" />
          </div>

          <div>
            {sampleBags.map((sampleBag, index) => (
              <SampleBag
                key={index}
                bagData={sampleBag}
                onChange={(bagData) => handleSampleBagChange(index, bagData)}
              />
            ))}
            <Button onClick={handleAddSampleBag}>Add Sample Bag</Button>
            {/* <button onClick={handleAddSampleBag}>Add New Sample Bag</button> */}
          </div>

          <div className="form-group"></div>

          <div className="form-group">
            <label htmlFor="totalWeight">Total Weight:</label>
            <input
              type="text"
              id="totalWeight"
              name="totalWeight"
              disabled
              // readOnly
              // value={getTotalSampleBagWeight(values.sampleBags)}
            />
          </div>

          <div className="form-group">
            <Button type="submit" className="btn submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <pre>{JSON.stringify(sampleBags, null, 2)}</pre>
        </Form>
      </div>
    </div>
  );
};
export default SampleForm;

{
  /* onSubmit=
      {(values) => {
        console.log("submited");
        console.log(sampleBags);
        // alert(values.sampleBags[0].FieldArray[0]);
      }} */
}

{
  /* <div className="form-group">
      <label htmlFor="seedsWeight">Seeds weight (grams):</label>
          <input type="text" id="seedsWeight" name="seedsWeight" />
        </div> */
}

{
  /* <div className="form-group">
          <label htmlFor="seedsWeight">Seeds weight (grams):</label>
          <input type="text" id="seedsWeight" name="seedsWeight" />
        </div>
            <>
              {sampleBags.length > 0 &&
                sampleBags.map((sampleBag, index) => (
                  <div key={index}>
                    <SampleBag
                      index={index}
                      bagNumber={sampleBag.bagNumber}
                      handleBarcodeData={sampleBag.scannedData}
                    />
                    <button
                      type="button"
                      className="btn remove"
                      onClick={() => {
                        arrayHelpers.remove(index);
                        setBagNumber((prevBagNumber) => prevBagNumber - 1);
                        //TODO check what to do if remove
                        // setBagNumber((prevBagNumber) => prevBagNumber -1);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              <button
                type="button"
                className={`btn add${
                  getTotalSampleBagWeight(values.sampleBags) >=
                    values.seedsWeight && values.sampleBags.length > 0
                    ? " disabled"
                    : ""
                }`}
                disabled={
                  getTotalSampleBagWeight(values.sampleBags) >=
                    values.seedsWeight && values.sampleBags.length > 0
                }
                onClick={() => {
                  arrayHelpers.push({
                    barcode: "",
                    weight: "",
                    bagNumber,
                    // ADDED************************************
                    barcodeData: scannedData,
                  });
                  setBagNumber((prevBagNumber) => prevBagNumber + 1);
                  // alert(values.sampleBags[values.sampleBags.length]);
                }}
              >
                Add Sample Bag
              </button>
            </>
          )}

        <div className="form-group">
          <label htmlFor="totalWeight">Total Weight:</label>
          <Field
            type="text"
            id="totalWeight"
            name="totalWeight"
            readOnly
            value={getTotalSampleBagWeight(values.sampleBags)}
          />
        </div>
        <button
          type="submit"
          // btn would be grayed and disabled as long as totalWeight != seedsWeight
          className={`btn submit${
            getTotalSampleBagWeight(values.sampleBags) != values.seedsWeight &&
            values.sampleBags.length > 0
              ? " disabled"
              : ""
          }`}
          // in this setup-> disable get true if 152 in false,
          //but once disable turns off it wont turn on again when i remove
          disabled={
            //false as loge there is a seedsWeight
            !(values.seedsWeight > 0) ||
            // false as long there are sampleBags
            values.sampleBags.length == 0 ||
            // false as long as totalWeight != seedsWeight
            getTotalSampleBagWeight(values.sampleBags) != values.seedsWeight
          }
        >
          Submit
        </button> */
}
