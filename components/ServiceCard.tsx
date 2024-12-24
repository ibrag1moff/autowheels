interface ServiceCardProps {
  title: string;
  icon: any;
  info: string;
}

export default function ServiceCard({ title, icon, info }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-3 shadow-xl w-full min-h-[300px] sm:w-[320px] p-4 rounded-md bg-white dark:bg-black/95">
      <span>{icon}</span>
      <h1 className="font-bold text-xl">{title}</h1>
      <p>{info}</p>
    </div>
  );
}
