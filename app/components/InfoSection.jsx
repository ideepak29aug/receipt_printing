import React, { useContext } from 'react'
import AccountContext from '../context/AccountContext';

const InfoSection = () => {
    const { customerInfo } = useContext(AccountContext);


  return (
    <div className="flex flex-wrap my-4">
      {/* dealer info */}
      <div className="w-[50%] border-[1px] p-2">
        <p className="font-bold">
          Dealer Name : {customerInfo.dealer_info.dealer}
        </p>
        <p className="font-bold">
          Organisation Name : {customerInfo.dealer_info.organisation}
        </p>
        <p className="font-semibold">
          Address : {customerInfo.dealer_info.address}
        </p>
        <p className="font-semibold">
          Ph No. : {customerInfo.dealer_info.phone}
        </p>
        <p className="font-semibold">
          Email : {customerInfo.dealer_info.email}
        </p>
      </div>
      {/* supplier info*/}
      <div className="w-[50%] border-[1px] p-2">
        <p className="font-bold">{customerInfo.supplier_info.supplier}</p>
        <p className="font-semibold">
          Address : {customerInfo.supplier_info.address}
        </p>
        <p className="font-semibold">
          Office : {customerInfo.supplier_info.phone}
        </p>
      </div>
      {/* client info */}
      <div className="w-[50%] border-[1px] p-2">
        <p className="font-bold">
          Client Name : {customerInfo.client_info.client}
        </p>
        <p className="font-bold">
          Organisation Name : {customerInfo.client_info.organisation}
        </p>
        <p className="font-semibold">
          Address : {customerInfo.client_info.address}
        </p>
        <p className="font-semibold">Ph No. : {customerInfo.client_info.phone}</p>
      </div>
      {/* quote info */}
      <div className="w-[50%] border-[1px] p-2">
        <p className="font-bold">Quote No : {customerInfo.quote_info.quote}</p>
        <p className='font-semibold'>Quote Date : {customerInfo.quote_info.date}</p>
        <p className='font-semibold'>Email : {customerInfo.quote_info.email}</p>
        <p className='font-semibold'>Web : {customerInfo.quote_info.website}</p>
        <p className='font-semibold'>Sales Person : {customerInfo.quote_info.person}</p>
        <p className='font-semibold'>Mob : {customerInfo.quote_info.phone}</p>
      </div>
    </div>
  );
}

export default InfoSection
