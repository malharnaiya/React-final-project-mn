import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const setNewCurrency = (val) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: val
        })
        console.log("new value", val)
    }
    return (
        <div className="alert alert-secondary">
            Currency:
            <select onChange={(e) => setNewCurrency(e.target.value)} defaultValue="₹" className="marginLeft">
                <option value="₹"> ₹ Rupee </option>
                <option value="$"> $ Dollar </option>
                <option value="£"> £ Pound </option>
                <option value="€"> € Euro </option>
            </select>
        </div>
    )
}

export default Currency;