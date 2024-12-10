export default function CustomInput({ label, invalid, ...props }) {
  let labelClass =
    'block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300';

  if (invalid) {
    labelClass += ' text-red-500';
  }

  return (
    <p>
      <label className={labelClass}>{label}</label>
      <input
        className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300'
        {...props}
      />
    </p>
  );
}
