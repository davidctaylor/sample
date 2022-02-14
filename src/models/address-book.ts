export enum RandomUserGender {
  'male' = 'MAIL',
  'female' = 'FEMAIL',
}

export interface RandomUser {
  cell: string;
  dob: {
    date: string;
    age: number
  }
  email: string;
  gender: RandomUserGender
  id: {
    name: string;
    value: string;
  }
  location: {
    street: string;
    city: string;
    state: string;
    country: string;
    postcode: string;
  }
  login: {
    uuid: string; username: string;
    password: string; 
    salt: string; 
    md5: string;
    sha1: string;
    sha256: string;
  }
  name: {
    title: string;
    first: string;
    last: string;
  }
  nat: string;
  phone: string;
  picture: {
    large: string; 
    medium: string;
    thumbnail: string;
  }
  registered: {
    date: string;
    age: number
  }
}