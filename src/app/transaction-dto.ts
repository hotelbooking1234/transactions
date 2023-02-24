export class TransactionDTO {
    customerName:string;
   date:number;
   time:number;
   city:string;
   history:string;
   amount:number;

   constructor(
    customerName:string,
   date:number,
   time:number,
   city:string,
   history:string,
   amount:number,
   )

   {
    this.customerName=customerName;
   this.date=date;
   this.time=time;
   this.city=city;
   this.history=history;
   this.amount=amount;
   }
   
}



