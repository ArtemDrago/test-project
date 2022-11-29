export interface UsersTypeData {
   "id": number,
   "name": string,
   "username": string,
   "email": string,
   "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
         "lat": number | string,
         "lng": number | string
      }
   },
   "phone": number,
   "website": string,
   "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
   }

}