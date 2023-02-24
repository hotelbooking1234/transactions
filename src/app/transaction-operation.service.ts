import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';
import { HttpClient } from '@angular/common/http';
import { TransactionDTO } from './transaction-dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionOperationService {
  baseURL = 'http://localhost:2022/transaction';
  allTransactionEndpoint = this.baseURL+'/display';
  addTransactionEndPoint:string=this.baseURL+'/add';
  transactionArr:TransactionDTO[] = [];
  constructor(private http:HttpClient) {
    console.log("Inside Constructor "+this.allTransactionEndpoint);
   }
   getAllTransactionFromSpring():Observable<TransactionDTO[]>
   {
    console.log("inside service : "+this.allTransactionEndpoint);
    return this.http.get<TransactionDTO[]>(`${this.allTransactionEndpoint}`);
   }

   addTransaction(transaction:Transaction):Observable<Transaction> {
    console.log("inside method 1 : Transaction Added" + transaction);
    return this.http.post<Transaction>(`${this.addTransactionEndPoint}`,transaction);
  
   }
  }


