import { Component } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionOperationService } from '../transaction-operation.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  t:Transaction = new Transaction('',0,0,'','',0);
  submitted = false;
  success = false;
  error = false;
  status = false;
  message = '';
  constructor(private transactionservice: TransactionOperationService) {}
  onSubmit() {

    this.transactionservice.addTransaction(this.t).subscribe(
      data=>{
        this.status=true;
        this.message="Transaction added";
      },
      error=>{
      }
    )
  }

}
