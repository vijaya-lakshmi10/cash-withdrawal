// Write your code here

import './index.css'

const DenominationItem =props=>{
    const {denominationValues,onWithdrawal}=props
    const {value}=denominationValues
    const withdrawAmount=()=>{
        onWithdrawal(value)
    }
    return(
        <li className="denomination-amounts">
        <button className="denominations" type="button" onClick={withdrawAmount}>{value}</button>
        </li>
        
    )
}
export default DenominationItem