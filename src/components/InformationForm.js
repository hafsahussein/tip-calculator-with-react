const InformationForm = ({bill, quality, people, getResult, handleChange}) => {
    const submit=e=>{
        e.preventDefault();
        getResult(bill, quality, people)
    }
    return ( 
        <form autoComplete="off"
         className="information"
         onSubmit={submit}
         >
    <p>How much was your  bill?</p>
    <input type="number"
    value={bill}
    onChange={handleChange('bill')}
     min="1" placeholder="$"
     required/>
    <p>How good was the service?</p>
    <select required
    value={quality}
    onChange={handleChange('quality')}>
        <option value="">--Choose Option--</option>
        <option value="0.3">30% Execellent!</option>
        <option value="0.2">20% Very Good!</option>
        <option value="0.15">15% Good!</option>
        <option value="0.1">10% Bad!</option>
        <option value="0.05">5% Very Bad!</option>
    </select>
    <p>How many people are you?</p>
    <input type="number" 
    value={people}
    min="1" placeholder="people"
    onChange={handleChange('people')}
    required/>
    <button type="submit">Calculate</button>
</form>

     );
}
 
export default InformationForm;