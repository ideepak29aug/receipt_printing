import dayjs from "dayjs";

const today = dayjs();
const date = today.format("DD-MM-YYYY");

export const CustomerInfo = {
  dealer_info: {
    dealer: "Mr. SURESH KUMAR PRAJAPATI",
    organisation: "ASIAN DOORS",
    address:
      "CORINZO ALUMINIUM WINDOW SYSTEM, NEAR BAHAD CIRCLE, RANISATI ROAD, SIKAR-332001 (RAJ.)",
    phone: "9828223334",
    email: "asiandoors3d@gmail.com",
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
    quote: "7222022-O-02532",
    date: date,
    email: "sales@corinzo.in",
    website: "www.corizo.in",
    person: "SURESH JI SIKAR",
    phone: "6351701699",
  },
};
