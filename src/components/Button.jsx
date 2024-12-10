export default function Button({ children, ...props }) {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
      {...props}>
      {children}
    </button>
  );
}
