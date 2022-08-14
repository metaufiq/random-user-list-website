import APIServices from "../configs/api";

const getListUser = async (params: any): Promise<any> => {
  const { data } = await APIServices.RandomUser.get('/', {params});

  return data;
};

const randomUser = {
  getListUser
};

export default randomUser;