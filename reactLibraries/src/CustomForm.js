import { Formik, Field, Form, ErrorMessage, useField } from "formik"
import * as Yup from "yup"

const Input = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props })
    
	return (
		<>
			<label className={props.type}>
                {props.label !== null ? props.label : null}
				<input type={props.type} {...field} {...props} />
				{children !== null ? children : null}
			</label>
			{ meta.touched && meta.error 
				? <div className="error">{meta.error}</div>
				: null
			}
		</>
	)
}

const CustomForm = () => {
    return (
        <Formik
        initialValues = {{
            name: "",
            email: "",
            amount: 0,
            currency: "",
            text: "",
            policy: false
        }}
        validationSchema = { Yup.object({
            name: Yup.string()
                    .min(2, "Minimum 2 symbols")
                    .required("Name required"),
            email: Yup.string()
                    .email("Incorrect email input")
                    .required("Email required"),
            amount: Yup.number()
                    .required("Sum required")
                    .min(5, "Minimum donation is 5"),
            currency: Yup.string(),
            text: Yup.string()
                    .min(5, "Minimum 5 characters"),
            policy: Yup.boolean()
                    .required("Accept policy to proceed")
                    .oneOf([true], "Accept policy to proceed")
        })}
        onSubmit = { values => {
			console.log(JSON.stringify(values, null, 2))
		}} >
            <Form className="form">
                <h2>Make a Donation</h2>
                <Input
                    label="Your name"
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                />
                <Input
                    label="Your email"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                />
                <div className="flex">
                    <Input
                        label="Amount"
                        id="amount"
                        name="amount"
                        type="number"
                        autoComplete="off"
                    />
                    <div className="grid">
                        <label htmlFor="currency">Currency</label>
                        <Field id="currency" name="currency" as="select" >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="PLN">PLN</option>
                        </Field>
                    </div>
                </div>
                <label htmlFor="text">Your message</label>
                <Field id="text" name="text" as="textarea" />
                <ErrorMessage component="div" className="error" name="text" />
                <Input name="policy" type="checkbox">
                    I have read and I accept the privacy policy
                </Input>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default CustomForm