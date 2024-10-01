import { BonusAccount } from './class/BonusAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
peopleAccount.withdraw(2)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(20)
companyAccount.getLoan(20)
console.log(companyAccount)

const bonusAccount: BonusAccount = new BonusAccount('Bonus', 30)
bonusAccount.deposit(20)
console.log(bonusAccount)