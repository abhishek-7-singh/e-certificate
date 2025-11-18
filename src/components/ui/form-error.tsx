interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="w-full bg-destructive p-3 my-4 rounded-md flex items-center gap-x-2 font-semibold text-destructive-foreground">
      <span
        aria-hidden="true"
        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-current text-destructive-foreground font-bold"
      >
        !
      </span>
      <p>{message}</p>
    </div>
  );
};

export default FormError;
