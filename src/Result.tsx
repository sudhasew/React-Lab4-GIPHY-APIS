export interface model {
  title: string;
  image: string;
  link: string;
}
export function Result(props: { gif: any }) {
  return (
    <div>
      <img src={props.gif} alt="" />
    </div>
  );
}
