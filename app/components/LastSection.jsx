import React from "react";

const LastSection = () => {
  return (
    <div className="mb-5" id="printable">
      <div>
        <h3 className="font-bold">PAYMENT TERMS</h3>
        <p>Up to 2lakhs 100% advance</p>
        <p>10lakhs to 20lakhs 70% advance and 30% before dispatch.</p>
        <p>20lakhs to 1cr 35% advance and 65% before dispatch.</p>
      </div>
      <div>
        <h3 className="font-bold underline">Terms and Condition:-</h3>
        <div className="pl-6">
          <ul className="list-decimal list-inside custom-list">
            <li>18% Gst Apply on Subtotal amount .</li>
            <li>This rate is as per Sq Feet</li>
            <li>
              Quantities, dimensions & type of openings have to be verified by
              the architect/client. If any change in the design report will
              result in a change in pricing & discount structure.
            </li>
            <li>
              In case of replacement of a window, the replaced window will be
              considered a new window. Removal charge for the old window and its
              disposal will be the client's responsibility.
            </li>
            <li>
              Manufacturing sizes will be 3mm less all around than minimum
              square opening sizes available.
            </li>
            <li>Final billing will be as per actual measurements on site.</li>
            <li>Glass protection tape is not under our scope of work.</li>
            <li>
              Protection tape will be removed immediately after installation;
              however, the tape can be kept for a maximum of 15 days after
              installation on the request of the client representative. The same
              will have to be removed by client’s representative. The company
              will not be responsible for any transfer of glue to the profile
              and will not be liable to clean the same.
            </li>
            <li>
              There is no warranty on Glass once installed and any damage to the
              same will be charged extra.
            </li>
            <li>
              Once windows are installed, the client should check and inform us
              within 2 days in case of any manufacturing defect. Corinzo Systems
              is not liable for any replacement after the aforementioned period.{" "}
            </li>
            <li>
              We will require the following at site at no extra cost: Power for
              hand tools. Hoist lift for the lifting of larger glass and
              windows/ Safe storage for Door Panels and Tracks in a store.
            </li>
            <li>Windows will be Installed 30 days after advance received.</li>
            <li className="font-bold">This rate is for 15 days</li>
          </ul>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="w-[40%]"></th>
                <th className="w-[60%]"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-1">Profile</td>
                <td className="p-1"></td>
              </tr>
              <tr>
                <td className="p-1">Hardware</td>
                <td className="p-1"></td>
              </tr>
              <tr>
                <td className="p-1">Glass</td>
                <td className="p-1"></td>
              </tr>
              <tr>
                <td className="p-1">Mosquito Mesh</td>
                <td className="p-1"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-6">I hereby accept the estimate as per above mentioned price and specifications. I have read and understood the terms & conditions and agree to them.</p>
      <div className="flex justify-between mt-20">
        <p>Authorized Signatory</p>
        <p>Signature of Customer</p>
      </div>
    </div>
  );
};

export default LastSection;
