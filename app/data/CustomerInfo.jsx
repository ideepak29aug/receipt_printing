import dayjs from "dayjs";

const today = dayjs();
const date = today.format("DD-MM-YYYY");

export const CustomerInfo = {
  dealer_info: {
    organisation: "ALU Fenestration",
    address:
      "ALU Fenestration ALUMINIUM WINDOW SYSTEM, NEAR BAHAD CIRCLE, RANISATI ROAD, SIKAR-332001 (RAJ.)",
    phone: "8432475152, 9785115505",
    email: "kailashjangir5152@gmail.com",
  },
  client_info: {
    client: "",
    organisation: "",
    address: "SIKAR",
    phone: "",
  },
  supplier_info: {
    address: "Sikar",
    phone: "",
  },
  quote_info: {
    quote: "",
    date: date,
  },
  gst_type: 'Rajasthan',
};
