import { apiRequestExternal } from "./util";

const endpoint = `https://formspree.io/f/xbjbldgw`;

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

function submit(data: ContactData): Promise<any> {
  return apiRequestExternal(endpoint, "POST", data);
}

const contact = { submit };

export default contact;
