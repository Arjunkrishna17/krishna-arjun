const Loading = () => {
  return (
    <div className="flex space-x-4 justify-center h-full items-center dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-4 w-4 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 bg-cyan-500 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loading;
