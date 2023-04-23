import React, { useState } from "react";

import ScannerComponent from "./ScannerComponent";
// // import { v4 as uuidv4 } from "uuid"; // import uuid

function SampleBag(props) {
  const [bagId, setBagId] = useState(props.bagData.bagId || "");
  const [bagWeight, setBagWeight] = useState(props.bagData.bagWeight || "");
  const [bagBarcode, setBagBarcode] = useState(props.bagData.bagBarcode || "");
  const [scannedData, setScannedData] = useState("");
  const [showScanner, setShowScanner] = useState(false);

  const handleBagIdChange = (event) => {
    setBagId(event.target.value);
    props.onChange({ ...props.bagData, bagId: event.target.value });
  };

  const handleBagWeightChange = (event) => {
    setBagWeight(event.target.value);
    props.onChange({ ...props.bagData, bagWeight: event.target.value });
  };

  const handleBagBarcodeChange = (event) => {
    setBagBarcode(event.target.value);
    props.onChange({ ...props.bagData, bagBarcode: event.target.value });
  };

  return (
    <div className="sample-bag">
      <div className="form-group">
        <label>
          Bag ID:
          <input type="text" value={bagId} onChange={handleBagIdChange} />
        </label>
        <label>
          Bag Weight:
          <input
            type="text"
            value={bagWeight}
            onChange={handleBagWeightChange}
          />
        </label>
        <label>
          Bag Barcode:
          <input
            type="text"
            value={bagBarcode}
            onChange={handleBagBarcodeChange}
          />
        </label>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowScanner(!showScanner)}
          >
            Scan
          </button>
          {showScanner && (
            <div>
              {/* <div id={`reader-${index}`}></div> */}
              <ScannerComponent
                scannedDataFromScanner={(data) => {
                  // setScannedData(data);
                  setBagBarcode(data);
                  setShowScanner(false);
                  
                }}
                readerId={props.key}
              />
            </div>
          )}
        </div>
      </div>
      <p>{scannedData}</p>
    </div>
  );
}
export default SampleBag;

// const SampleBag = ({
//   bagNumber,
//   index,
//   getBarcode,
//   arrayHelpers,
//   sampleBags,
// }) => {
//   const [scannedData, setScannedData] = useState("");
//   const [showScanner, setShowScanner] = useState(false);

//   const handleChange = (event) => {
//     setScannedData(event.target.value);
//   };

//   return (
//     <div className="sample-bag">
//       <h4>Sample Bag {bagNumber}</h4>

//       <div className="form-group">
//         <label htmlFor={`sampleBags.${index}.barcode`}>Barcode:</label>
//         <button
//           type="button"
//           className="btn btn-secondary"
//           onClick={() => setShowScanner(!showScanner)}
//         >
//           Scan
//         </button>
//         {showScanner && (
//           <div>
//             {/* <div id={`reader-${index}`}></div> */}
//             <ScannerComponent
//               scannedDataFromScanner={(data) => {
//                 setScannedData(data);
//                 setShowScanner(false);
//               }}
//               // readerId={`reader-${index}`}
//             />
//           </div>
//         )}

//         {/* <Field
//           // validateOnChange={true}
//           type="text"
//           id={`sampleBags.${index}.barcode`}
//           name={`sampleBags.${index}.barcode`}
//           onChange={(e) => handleChange(e)}
//           value={scannedData}
//         /> */}

//         <input type="text" />
//       </div>

//       <div className="form-group">
//         {/* <label htmlFor={`sampleBags.${index}.weight`}>Weight (grams):</label> */}
//         {/* <Field
//           type="text"
//           id={`sampleBags.${index}.weight`}
//           name={`sampleBags.${index}.weight`}
//         /> */}
//       </div>
//     </div>
//   );
// };
// export default SampleBag;
