type StatProps = {
  value: string;
  label: string;
};

export function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col gap-3 items-center">
      <span className="text-center text-5xl font-bold">{value}</span>
      <span className="text-center">{label}</span>
    </div>
  );
}
