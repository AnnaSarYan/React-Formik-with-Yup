import {useFormik} from "formik";
import { basicSchema } from "../schemas";

const BasicForm = () =>{
    const onSubmit = () => {
        console.log("submitted")
    }
    const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    console.log(values);
    
    return(
        <div>
            <form onSubmit={handleSubmit}  autoComplete="off" className="form-component">
                <div className="first-last-name">
                    <div className="text-input input">
                        <label htmlFor="first-name">First Name</label>
                        <input  
                            id="firstName" 
                            type="text" 
                            placeholder="First Name" 
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
            
                    <div className="text-input input">
                        <label htmlFor="last-name">Last Name</label>
                        <input  
                            id="lastName" 
                            type="text" 
                            placeholder="Last Name" 
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
            
                    <label htmlFor="email">E-mail</label>
                    <input  
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className = {errors.email && touched.email ? "input-error" : "" }
                    />
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    <label htmlFor="age">Age</label>
                    <input  
                        id="age" 
                        type="number" 
                        placeholder="Enter your age" 
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className = {errors.age && touched.age ? "input-error" : "" }
                    />
                    {errors.age && touched.age && <p className="error">{errors.age}</p>}
                    <label htmlFor="password">Password</label>
                    <input  
                        id="password" 
                        type="password" 
                        placeholder="Password" 
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className = {errors.password && touched.password ? "input-error" : "" }
                    />
                    {errors.password && touched.password && <p className="error">{errors.password}</p>}
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input  
                        id="confirmPassword" 
                        type="password" 
                        placeholder="Confirm password" 
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className = {errors.confirmPassword && touched.confirmPassword ? "input-error" : "" }
                    />
                    {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

            
                <button disabled={isSubmitting} type="submit">Sing Up</button>
                <span className="or">OR</span>
            </form>
        </div>
    );
};

export default BasicForm;