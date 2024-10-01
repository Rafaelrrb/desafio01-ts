import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.setBalance( this.getBalance() + valor + 10)
    }
  }
}