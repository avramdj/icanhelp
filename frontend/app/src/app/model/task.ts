import { User } from "./user";

export class Task{
    korisnik:User;
    task_string:String;
    latitude:String;
    longitude:String;
    task_creation_date:Date;
    creation_date_string:String;
    udaljenost: Number;
}

/* 
    { “jmbg” : String,
         “task_string” : String,
         “latitude” : Number/String, 
        “longitude” : Number/String }


*/
