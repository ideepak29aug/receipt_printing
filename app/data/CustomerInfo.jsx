import dayjs from "dayjs";

const today = dayjs();
const date = today.format("DD-MM-YYYY");

export const CustomerInfo = {
  dealer_info: {
    dealer: "Mr. SURESH KUMAR PRAJAPATI",
    organisation: "ALU Fenestration",
    address:
      "ALU Fenestration ALUMINIUM WINDOW SYSTEM, NEAR BAHAD CIRCLE, RANISATI ROAD, SIKAR-332001 (RAJ.)",
    phone: "8432475152, 9785115505",
    email: "kailashjangir5152@gmail.com",
  },
  client_info: {
    client: "Mr. NARENDRA JI JANGID",
    organisation: "NARENDRA JI JANGID",
    address: "SIKAR",
    phone: "7727852952",
  },
  supplier_info: {
    supplier: "GANPATI ALUMINIUM",
    address:
      "Sikar",
    phone: "+91 987654321",
  },
  quote_info: {
    quote: "",
    date: date,
    email: "",
    website: "",
    person: "",
    phone: "6351701699",
  },
};
