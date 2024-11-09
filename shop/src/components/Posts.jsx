import Post from "./Post";

const Posts = ({ data, setCount, count }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {data?.map((v) => (
        <Post key={v.id} v={v} count={count} setCount={setCount} />
      ))}
    </div>
  );
};

export default Posts;
