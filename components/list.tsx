import Link from "next/link";

function ListItem({ date, title }) {
  return (
    <div className="flex items-start gap-1.5 px-1.5 py-3 font-mono text-xs transition-all last:border-none hover:bg-slate-50 dark:hover:bg-slate-800">
      <div className="flex min-w-[100px] items-center gap-2">
        <span className="text-slate-500 dark:text-slate-400">{date.toLocaleDateString("en-US")}</span>
      </div>
      <span className="text-slate-600 dark:text-slate-300">{title}</span>
    </div>
  );
}

function List({ title, items, headers }) {
  return (
    <section className="flex flex-col gap-2 text-sm dark:text-white">
      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-300">{title}</h4>
      <div className="flex flex-col">
        <div className="flex gap-2 border-b border-slate-200 p-1.5 font-roboto-mono text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
          {headers.map((header, index) => (
            <span key={index} className={`${index === 0 && "min-w-[100px]"}`}>
              {header}
            </span>
          ))}
        </div>
        {items.map((item, index) => (
          <Link
            key={item.link}
            href={item.link}
            className={`${index !== 0 && "border-t border-slate-200 dark:border-slate-700"}`}
          >
            <ListItem {...item} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default List;
