import axiosClient from "./AxiosClient";

const LinkApi = {
  getAll: (params = null) => {
    const url = "/Link";
    return axiosClient.get(url, { params });
  },
  PostLink: (data, params = null) => {
    const url = "/Link";
    console.log(params);
    return axiosClient.post(url, data, {});
  },
  getOneId: (id) => {
    const url = `/Link/${id}`;
    return axiosClient.get(url);
  },
  DleLink: (id) => {
    const url = `/Link/${id}`;
    return axiosClient.delete(url);
  },
  updateStatus: (data) => {
    const url = `/Link`;
    return axiosClient.put(url, data);
  },
};

export default LinkApi;
