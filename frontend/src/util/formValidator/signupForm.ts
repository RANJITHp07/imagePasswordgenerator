import { UserForm } from "../../@types/user";

export const resolver=async (values:UserForm) => {
    let errors: Record<string, { type: string; message: string }> = {};
    const currentPath=typeof window !== 'undefined' ? window.location.pathname : '';
    // Check each field for empty values
    if (!values.username ) {
      errors.username = {
        type: '',
        message: 'Username is required.',
      };
    }
  
    if (!values.email && currentPath!== '/login') {
      errors.email = {
        type: '',
        message: 'Email is required.',
      };
    }
  
    if (!values.password ) {
      errors.password = {
        type: '',
        message: 'Password is required.',
      };
    }
  
    if (!values.confirm_password  && currentPath !== '/login') {
      errors.confirm_password = {
        type: '',
        message: 'Confirm Password is required.',
      };
    }
  
  
  
    // Check if passwords match
    if (values.password !== values.confirm_password && currentPath !== '/login') {
      errors.confirm_password = {
        type: 'passwordMatch',
        message: 'Passwords do not match.',
      };
    }
  
    return {
      values: Object.keys(values).length === (currentPath==='/login' ? 2 :4)  ? values : {},
      errors,
    };
}