const AvatarGroup = () => {
  const avatarData = [
    {
      id: 1,
      name: "User1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PMD90prQN66mAPiwsEMNmMxwhmjBtWxEcg&s",
    },
    {
      id: 2,
      name: "User2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXmSSWT-37n83StpUmIehB2iLvKudtsmUqA&s",
    },
    {
      id: 3,
      name: "User3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqXmSSWT-37n83StpUmIehB2iLvKudtsmUqA&s",
    },
    {
      id: 4,
      name: "User4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cYQ6cSH7TSIDevIyAT4NZxCz007ZU6SipQ&s",
    },
    {
      id: 5,
      name: "User5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjDZZ9uSjtwnFYUZ3dq5-O-Kf2Aouoh9tzQ&s",
    },
  ];

  return (
    <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-[#101531] w-fit shadow-md">
      <div className="flex -space-x-4">
        {avatarData.map((user, index) => (
          <div
            key={user.id}
            className="w-10 h-10 rounded-full ring-2 ring-white overflow-hidden"
            style={{ zIndex: avatarData.length - index }}
          >
            <img
              src={user.image}
              alt={user.name}
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <span className="text-white text-sm font-medium">
        12,577 Clients satisfaits
      </span>
    </div>
  );
};

export default AvatarGroup;
