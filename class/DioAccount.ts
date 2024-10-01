export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (balance: number) :void =>{
    this.balance = balance
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.setBalance( this.getBalance() + valor)
    }
  }

  withdraw = (valor: number): void => {
    if(this.getBalance()<valor){
      console.log('Não pode sacar')
    }

    if(this.validateStatus()){
      this.setBalance( this.getBalance() - valor)
    }
    
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
