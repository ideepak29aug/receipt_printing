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
      "3,4 Mahaprabhu nagar, block-23, Survery-9/1, Narayan Nagar Main Road, Limbayat, Surat-394210 (Guj.)",
    phone: "0261 2272286, +91 9825904513, +91 9825904504",
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
