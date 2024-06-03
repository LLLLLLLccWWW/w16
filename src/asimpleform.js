import { useFormik } from "formik";

export default function SimpleForm(){
    return(
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"></input>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email"></input>
            <button type="submit">Submit</button>
        </form>
    )
}