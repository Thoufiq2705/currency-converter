import { useEffect, useState } from 'react'
import CurrencyRow from './money.png'
import './App.css'

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')
  const [result, setResult] = useState(1);

  const changeCurrency = async () => {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const result = (amount * rate).toFixed(2);
    setResult(result);
  }

  useEffect(() => {
    changeCurrency();
    // console.log(amount);
  }, [amount, fromCurrency, toCurrency, result])
  

  const handleChange = (e) => {
    setAmount(e.target.value)
    changeCurrency()
  }

  return (
    <div className=' flex justify-center items-center w-[100vw] h-[100vh] m-0 p-0'> 
      <div className='w-[400px] p-4 bg-slate-50	flex justify-center flex-col items-center rounded-md' > 
        <img src={CurrencyRow} alt="currency-exchange" className=' mt-[-35px] p-0 w-72'/>
        <h1 className='text-clr w-[100%] text-center text-2xl border-y-8 border-t  border-b border-dashed border-sky-400 py-2 mt-[-20px]' >Currency Converter</h1>
        <div className="calculations w-[100%] flex flex-col justify-start mt-5">

          <label htmlFor="amount" className='common-text '> amount:</label>
          <input type="number" name="amount" id="amount" className='outline-none common-input' value={amount} onChange={(e) => {handleChange(e)}} required/>

          <label htmlFor="from-currency" className='common-text ' > from Currency:</label>
          <select name="from-currency" id="" className='outline-none common-input' value={fromCurrency} onChange={(e)=> setFromCurrency(e.target.value)} required>
            <option value="USD">USD - United States of America</option>
            <option value="EUR">EUR - Europian Union</option>
            <option value="INR">INR - India</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>

          <label htmlFor="to-currency" className='common-text ' > to Currency:</label>
          <select name="to-currency" id="" className='outline-none common-input' value={toCurrency} onChange={(e)=> setToCurrency(e.target.value)} required>
            <option value="USD">USD - United States of America</option>
            <option value="EUR">EUR - Europian Union</option>
            <option value="INR">INR - India</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="BRl">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>

          <div className="result ">
                {amount} {fromCurrency} is equals to {result} {toCurrency}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
