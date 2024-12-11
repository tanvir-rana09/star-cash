import { forwardRef } from 'react';
import { Controller } from 'react-hook-form';

// Reusable input field component
const InputField = forwardRef(({
  type = 'text',
  name,
  label = '',
  control = null,
  placeholder,
  error = '',
  className = '',
  required = false
}, ref) => {
  const renderInputField = (field) => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            ref={ref}
            rows={7}
            {...field}
            placeholder={placeholder}
            className={`w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
          />
        );

      default:
        return (
          <input
            type={type}
            {...field}
            ref={ref}
            // onChange={onChange}
            placeholder={placeholder}
            className={`w-full rounded placeholder:text-[15px] text-gray-300 placeholder:text-gray-400 placeholder:font-normal placeholder:tracking-wider border border-gray-600 bg-transparent py-3 pl-3 pr-5 outline-none focus:border-green-500 focus-visible:shadow-none  ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
          />
        );
    }
  };

  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <p className='mb-2 text-[16px] font-[500] text-gray-300'>{label} {required && <span className='text-red-500'>{'*'}</span>}</p>
      <Controller
        name={name}
        control={control}
        render={({ field }) => renderInputField(field)}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
});

InputField.displayName = "InputField";

export default InputField;
