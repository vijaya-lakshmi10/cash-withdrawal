// Write your code here

import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component{
    state={balanceAmount:2000}
    
    onWithdrawal=(amount)=>{
        this.setState((prevState)=>({balanceAmount:prevState.balanceAmount-amount}))
    }

    render(){
        const {balanceAmount}=this.state
        const {denominationsList}=this.props
        return(
            <div className="cash-withdrawal-container">
            <div className="denomination-container">
            <div className="heading">
            <div className="letter-container">
            <p className="letter">S</p>
            </div>
            <h1 className="name-heading">Sarah Williams</h1>
            </div>
            <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="balance-amount-container">
            <p className="balance-amount">{balanceAmount}</p>
            <p className="rupees">In Rupees</p>
            </div>
            </div>
            <p className="withdraw">Withdraw</p>
            <p className="desc">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-amount">
            {denominationsList.map((eachDenomination)=>(<DenominationItem denominationValues={eachDenomination} onWithdrawal={this.onWithdrawal} key={eachDenomination.id}/>))}
            </ul>
            </div>
            </div>
        )
    }
}
export default CashWithdrawal
