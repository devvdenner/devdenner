import { contactFormStyles } from './ContactForm.styles';

export const useContactFormViewModel = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return {
    handleSubmit,
    styles: contactFormStyles,
  };
};
