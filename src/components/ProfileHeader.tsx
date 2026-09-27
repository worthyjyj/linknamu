type ProfileHeaderProps = {
  name: string;
  bio: string;
};

export default function ProfileHeader({ name, bio }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gray-200 text-4xl dark:bg-gray-700">
        🙂
      </div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">{bio}</p>
    </div>
  );
}
