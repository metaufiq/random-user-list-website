import APIServices from "../../configs/api";
import { GetListUserResponses } from "./randomUser.api.types";

const getListUser = async (params: any): Promise<GetListUserResponses> => {
  const { data } = await APIServices.RandomUser.get('/', {params});

  return data;
};

const randomUser = {
  getListUser
};

export default randomUser;