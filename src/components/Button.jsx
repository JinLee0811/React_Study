export default function Button({ children, ...props }) {
  //props를 줄때 나머지 연산자를 통해서 모든 기능을 전해줄 수 있다
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
      {...props} //이런식으로 나머지 연산자를 통해 모든 기능을 전달할 수 있다, 굳이 하나하나 함수 전달 안해도 되는 장점
    >
      {children}
    </button>
  );
}
// 버튼사이에 있는 내용을 children으로 받아서 출력해준다
// 이렇게 하면 버튼을 재사용할 수 있다
