import type { ApiResp } from './../types'

export interface getImageParm {
    username: string;
    password: string;
  }
  
  export interface LoginResp extends ApiResp {
    data: {
      access_token: string;
    }
  }