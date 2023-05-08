import FormInputs from './FormInputs';
import useFormContext from "../hooks/useFormContext"

const Form = () => {

    const {
        page,
        setPage,
        data,
        title,
        canSubmit
    } = useFormContext();


    const handlePrev = () => setPage(prev => prev - 1);

    const handleNext = () => setPage(prev => prev + 1);

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data));
    }



    const content = (
        <form className="form flex-col" onSubmit={handleSubmit}>
            <header>
                <h2>{title[page]}</h2>

                <div className='button-container'>

                    <button type="button" className="button" disabled={!canSubmit} onClick={handlePrev}>Prev</button>
                    <button type="button" className="button" disabled={!canSubmit} onClick={handleNext}>Next</button>

                    <button type="submit" className="button" disabled={!canSubmit}>Submit</button>
                </div>
            </header>

            <FormInputs />

        </form>
    );

    return content;
}
export default Form