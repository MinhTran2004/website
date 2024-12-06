import axios from "axios";

export default class AccountService {
    static url = 'http://localhost:5000/account';

    static getAllAccount = async () => {
        try{
            const reponse = (await axios.get(`${this.url}/getAllAccount`)).data;
            
            if (reponse.status) {
                return reponse.data;
            }else{
                return [];
            }
        }catch(err){
            console.log(err);
        }
    }
    
}