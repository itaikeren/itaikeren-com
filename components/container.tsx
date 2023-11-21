function Container({ children }) {
  return (
    <div className="relative mx-auto flex max-w-sm flex-col gap-5 px-8 py-10 text-gray-800 selection:bg-green-200 dark:text-white dark:selection:text-gray-800 sm:max-w-2xl md:pt-20 lg:max-w-3xl">
      {children}
    </div>
  );
}

export default Container;
