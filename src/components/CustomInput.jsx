export default function CustomInput({ label, invalid, ...props }) {
  let labelClass =
    'block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300';

  if (invalid) {
    labelClass += ' text-red-500';
  }
  //   labelClass에 조건에 따라 클래스를 추가해준다. 이런 부분은 스타일컴포넌트나 css-in-js를 사용하면 더 편하게 할 수 있는 거 같음
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
// label도 인풋과 동시에 전달해서 프롭으로 받아서 출력 가능!
